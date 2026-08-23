import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { MarkdownRuleOptions } from './typegens/markdown.js';
import type { MarkdownLinksRuleOptions } from './typegens/markdown-links.js';
import type { MarkdownPreferencesRuleOptions } from './typegens/markdown-preferences.js';

import { default as mdPlugin } from '@eslint/markdown';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';
import { default as linksPlugin } from 'eslint-plugin-markdown-links';
import { default as prefsPlugin } from 'eslint-plugin-markdown-preferences';

import * as editorConfig from './resolvers/editor-config.js';
import { mdRules } from './rules/markdown.js';
import { linksRules } from './rules/markdown-links.js';
import { preferencesRules } from './rules/markdown-preferences.js';

export function markdown(options: DefaultOptions<MarkdownRuleOptions | MarkdownLinksRuleOptions | MarkdownPreferencesRuleOptions> = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.md',
		...(options.files ?? [])
	];

	const ignores = options.overrides?.ignores ?? [
		'CHANGELOG.md',
		...(options.ignores ?? [])
	];

	return (resolve, register) => {
		register('embedded/sources', '**/*.md');

		let markdownRules: Partial<MarkdownRuleOptions> | undefined;
		let markdownPreferencesRules: Partial<MarkdownPreferencesRuleOptions> | undefined;

		if(options.overrides?.rules) {
			markdownRules = options.overrides.rules as Partial<MarkdownRuleOptions>;
			markdownPreferencesRules = options.overrides.rules as Partial<MarkdownPreferencesRuleOptions>;
		}
		else {
			const minorWords = resolve<string>('glossary/minorWords', []);
			const nonCodeWords = resolve<string>('glossary/nonCodeWords', []);
			const preserveWords = resolve<string>('glossary/preserveWords', []);

			markdownRules = {
				...mdRules,
				...options.rules,
			};

			markdownPreferencesRules = {
				...preferencesRules,
				...linksRules,
				...editorConfig.markdown(resolve, register),
				'markdown-preferences/heading-casing': [
					'error',
					{
						preserveWords,
						minorWords,
					}
				],
				'markdown-preferences/prefer-inline-code-words': [
					'error',
					{
						words: ['/[A-Z][a-z]+\\.[a-z][A-Za-z]+/u'],
						ignores: [
							{
								words: nonCodeWords,
							},
						],
					},
				],
				'markdown-preferences/table-header-casing': [
					'error',
					{
						preserveWords,
						minorWords,
					}
				],
				...options.rules,
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
				rules: markdownRules,
			},
			{
				name: 'zokugun/markdown-preferences/rules',
				files,
				ignores,
				language: 'markdown-preferences/extended-syntax',
				rules: markdownPreferencesRules,
			},
		];
	};
}
