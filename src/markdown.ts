import type { Configurator, EditorConfigOptions, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit';
import type { RuleOptions as MarkdownRuleOptions } from './typegens/markdown.js';
import type { RuleOptions as MarkdownLinksRuleOptions } from './typegens/markdown-links.js';
import type { RuleOptions as MarkdownPreferencesRuleOptions } from './typegens/markdown-preferences.js';

import { default as mdPlugin } from '@eslint/markdown';
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

	return (resolve) => {
		const ecRules: Partial<MarkdownPreferencesRuleOptions> = {};
		const ecConfig = resolve<EditorConfigOptions>('editorconfig/md');

		if(ecConfig) {
			const {
				indent_size,
				indent_style,
				trim_trailing_whitespace,
			} = ecConfig;

			if (indent_style === 'space') {
				ecRules['markdown-preferences/no-tabs'] = [
					'error',
					{
						checkTarget: 'all',
						codeBlockTabWidth: Number(indent_size),
					},
				];
			}
			else if (indent_style === 'tab') {
				ecRules['markdown-preferences/no-tabs'] = ['off'];
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
				name: 'zokugun/md/rules',
				files,
				ignores,
				plugins: {
					md: mdPlugin,
					'markdown-links': linksPlugin,
					'markdown-preferences': prefsPlugin,
				},
				language: 'md/gfm',
				languageOptions: {
					frontmatter: 'yaml',
				},
				rules: {
					...mdRules,
					...linksRules,
					...options.rules,
				}
			},
			{
				name: 'zokugun/markdown-preferences/rules',
				files,
				ignores,
				plugins: {
					md: mdPlugin,
					'markdown-links': linksPlugin,
					'markdown-preferences': prefsPlugin,
				},
				language: 'markdown-preferences/extended-syntax',
				rules: {
					...prefsRules,
					...ecRules,
					...options.rules,
				}
			},
		];
	};
}
