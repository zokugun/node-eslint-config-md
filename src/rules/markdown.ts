import type { MarkdownRuleOptions } from '../typegens/markdown.js';

export const mdRules: Required<MarkdownRuleOptions> = {
	'md/fenced-code-language': [
		'error',
	],
	'md/fenced-code-meta': [
		'off',
	],
	'md/heading-increment': [
		'off',
	],
	'md/no-bare-urls': [
		'error',
	],
	'md/no-duplicate-definitions': [
		'error',
	],
	'md/no-duplicate-headings': [
		'error',
		{
			checkSiblingsOnly: true,
		},
	],
	'md/no-empty-definitions': [
		'error',
	],
	'md/no-empty-images': [
		'error',
	],
	'md/no-empty-links': [
		'error',
	],
	'md/no-html': [
		'off',
	],
	'md/no-invalid-label-refs': [
		'error',
	],
	'md/no-missing-atx-heading-space': [
		'error',
	],
	'md/no-missing-label-refs': [
		'error',
		{
			// https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
			allowLabels: [
				'!CAUTION',
				'!IMPORTANT',
				'!NOTE',
				'!TIP',
				'!WARNING',
			],
		},
	],
	'md/no-missing-link-fragments': [
		'error',
	],
	'md/no-multiple-h1': [
		'error',
	],
	'md/no-reference-like-urls': [
		'error',
	],
	'md/no-reversed-media-syntax': [
		'error',
	],
	'md/no-space-in-emphasis': [
		'error',
	],
	'md/no-unused-definitions': [
		'error',
	],
	'md/require-alt-text': [
		'error',
	],
	'md/table-column-count': [
		'error',
		{
			checkMissingCells: true,
		},
	],
};
