import type { Configurator, EditorConfigOptions, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit';
import type { RuleOptions as MarkdownRuleOptions } from './typegens/markdown.js';
import type { RuleOptions as MarkdownLinksRuleOptions } from './typegens/markdown-links.js';
import type { RuleOptions as MarkdownPreferencesRuleOptions } from './typegens/markdown-preferences.js';

import { default as mdPlugin } from '@eslint/markdown';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';
import { default as linksPlugin } from 'eslint-plugin-markdown-links';
import { default as prefsPlugin } from 'eslint-plugin-markdown-preferences';

import { rules as mdRules } from './rules/markdown.js';
import { rules as linksRules } from './rules/markdown-links.js';
import { rules as prefsRules } from './rules/markdown-preferences.js';

type Options = OptionRules<MarkdownRuleOptions | MarkdownLinksRuleOptions | MarkdownPreferencesRuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function markdown(options: Options = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.md',
		...(options.files ?? [])
	];

	const ignores = options.overrides?.ignores ?? [
		'CHANGELOG.md',
		...(options.ignores ?? [])
	];

	return (resolve, register) => {
		register('embedded.sources', '**/*.md');

		const ecRules: Partial<MarkdownPreferencesRuleOptions> = {};
		const ecConfig = resolve<EditorConfigOptions>('editorconfig/md');

		if(ecConfig) {
			const {
				indent_size,
				indent_style,
				trim_trailing_whitespace,
			} = ecConfig;

			if (indent_style === 'space') {
				const indentSize = Number(indent_size);

				ecRules['markdown-preferences/no-tabs'] = [
					'error',
					{
						checkTarget: 'all',
						codeBlockTabWidth: indentSize,
					},
				];

				ecRules['markdown-preferences/indent'] = [
					'error',
					{
						listItems: {
							first: 1,
							other: indentSize,
							relativeTo: 'markerStart',
						},
					},
				];

				register('embedded.indent', indentSize);
			}
			else if (indent_style === 'tab') {
				ecRules['markdown-preferences/no-tabs'] = ['off'];

				ecRules['markdown-preferences/indent'] = [
					'off',
				];

				register('embedded.indent', 'tab');
			}

			if(trim_trailing_whitespace === 'true') {
				ecRules['markdown-preferences/no-trailing-spaces'] = ['error'];
			}
			else if(trim_trailing_whitespace === 'false') {
				ecRules['markdown-preferences/no-trailing-spaces'] = ['off'];
			}
		}

		return [
			{
				name: 'zokugun/markdown/plugin',
				plugins: {
					md: mdPlugin,
					'markdown-links': linksPlugin,
					'markdown-preferences': prefsPlugin,
				},
			},
			{
				name: 'zokugun/markdown/embedded',
				files,
				ignores: [
					...ignores,
					'**/*.md/*.md',
				],
				processor: mergeProcessors([
					mdPlugin.processors!.markdown,
					processorPassThrough,
				]),
			},
			{
				name: 'zokugun/markdown/rules',
				files,
				ignores,
				language: 'md/gfm',
				languageOptions: {
					frontmatter: 'yaml',
				},
				rules: {
					...mdRules,
					...options.rules,
				},
			},
			{
				name: 'zokugun/markdown-preferences/rules',
				files,
				ignores,
				language: 'markdown-preferences/extended-syntax',
				rules: {
					...ecRules,
					...linksRules,
					...prefsRules,
					...options.rules,
				},
			},
		];
	};
}
