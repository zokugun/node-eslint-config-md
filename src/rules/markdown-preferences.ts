import type { MarkdownPreferencesRuleOptions } from '../typegens/markdown-preferences.js';

export const preferencesRules: Required<MarkdownPreferencesRuleOptions> = {
	'markdown-preferences/atx-heading-closing-sequence-length': [
		'off',
	],
	'markdown-preferences/atx-heading-closing-sequence': [
		'error',
	],
	'markdown-preferences/blockquote-marker-alignment': [
		'error',
	],
	'markdown-preferences/bullet-list-marker-style': [
		'error',
		{
			primary: '-',
			overrides: [
				{
					level: 2,
					primary: '-',
				}
			],
		},
	],
	'markdown-preferences/canonical-code-block-language': [
		'error',
		{
			languages: {
				js: 'javascript',
				ts: 'typescript',
				py: 'python',
				sh: 'shell',
				yml: 'yaml',
				md: 'markdown',
				rs: 'rust',
				golang: 'go',
				cplusplus: 'cpp',
				'c++': 'cpp',
			}
		},
	],
	'markdown-preferences/code-fence-length': [
		'error',
	],
	'markdown-preferences/code-fence-spacing': [
		'error',
	],
	'markdown-preferences/code-fence-style': [
		'error',
	],
	'markdown-preferences/custom-container-marker-spacing': [
		'error',
	],
	'markdown-preferences/definitions-last': [
		'error',
		{
			linkDefinitionPlacement: {
				referencedFromSingleSection: 'document-last',
				referencedFromMultipleSections: 'document-last'
			},
			footnoteDefinitionPlacement: {
				referencedFromSingleSection: 'document-last',
				referencedFromMultipleSections: 'document-last'
			}
		}
	],
	'markdown-preferences/emphasis-delimiters-style': [
		'error',
		{
			emphasis: '*',
			strong: '**',
			strongEmphasis: '***',
		},
	],
	'markdown-preferences/emoji-notation': [
		'error',
		{
			prefer: 'colon',
		},
	],
	'markdown-preferences/hard-linebreak-style': [
		'error',
	],
	'markdown-preferences/heading-casing': [
		'error',
		{
			style: 'Title Case',
			preserveWords: [
				'API',
				'AI',
				'ESLint',
				'JavaScript',
				'TypeScript'
			],
			ignorePatterns: [
				'/^v\\d+/u',
				'/\\w+\\.[a-z\\d]+$/u'
			],
			minorWords: [
				'a',
				'an',
				'and',
				'are',
				'at',
				'but',
				'for',
				'have',
				'in',
				'isn\'t',
				'not',
				'of',
				'on',
				'or',
				'the',
				'to',
				'want',
				'with',
			],
		}
	],
	'markdown-preferences/indent': [
		'error',
	],
	'markdown-preferences/level1-heading-style': [
		'error',
		{
			style: 'setext',
		},
	],
	'markdown-preferences/level2-heading-style': [
		'error',
		{
			style: 'setext',
		},
	],
	'markdown-preferences/link-bracket-newline': [
		'error',
	],
	'markdown-preferences/link-bracket-spacing': [
		'error',
	],
	'markdown-preferences/link-destination-style': [
		'error',
	],
	'markdown-preferences/link-paren-newline': [
		'error',
	],
	'markdown-preferences/link-paren-spacing': [
		'error',
	],
	'markdown-preferences/list-marker-alignment': [
		'error',
	],
	'markdown-preferences/link-title-style': [
		'error',
	],
	'markdown-preferences/max-len': [
		'off',
	],
	'markdown-preferences/no-heading-trailing-punctuation': [
		'error',
	],
	'markdown-preferences/no-implicit-block-closing': [
		'error',
	],
	'markdown-preferences/no-laziness-blockquotes': [
		'error',
	],
	'markdown-preferences/no-multi-spaces': [
		'error',
	],
	'markdown-preferences/no-multiple-empty-lines': [
		'error',
	],
	'markdown-preferences/no-tabs': [
		'error',
	],
	'markdown-preferences/no-text-backslash-linebreak': [
		'error',
	],
	'markdown-preferences/no-trailing-spaces': [
		'off',
	],
	'markdown-preferences/ordered-list-marker-sequence': [
		'error',
	],
	'markdown-preferences/ordered-list-marker-start': [
		'error',
	],
	'markdown-preferences/ordered-list-marker-style': [
		'error',
	],
	'markdown-preferences/padded-custom-containers': [
		'error',
	],
	'markdown-preferences/padding-line-between-blocks': [
		'error',
	],
	'markdown-preferences/prefer-autolinks': [
		'error',
	],
	'markdown-preferences/prefer-fenced-code-blocks': [
		'error',
	],
	'markdown-preferences/prefer-inline-code-words': [
		'off',
	],
	'markdown-preferences/prefer-link-reference-definitions': [
		'error',
		{
			ignoreUrlPatterns: ['/^#/'],
		}
	],
	'markdown-preferences/prefer-linked-words': [
		'off',
	],
	'markdown-preferences/setext-heading-underline-length': [
		'error',
	],
	'markdown-preferences/sort-definitions': [
		'error',
	],
	'markdown-preferences/strikethrough-delimiters-style': [
		'error',
	],
	'markdown-preferences/table-header-casing': [
		'error',
		{
			style: 'Sentence case',
			ignorePatterns: [
				'/^v\\d+/u',
				'/\\w+\\.[a-z\\d]+$/u'
			],
		},
	],
	'markdown-preferences/table-leading-trailing-pipes': [
		'error',
	],
	'markdown-preferences/table-pipe-alignment': [
		'error',
	],
	'markdown-preferences/table-pipe-spacing': [
		'error',
	],
	'markdown-preferences/thematic-break-character-style': [
		'error',
	],
	'markdown-preferences/thematic-break-length': [
		'error',
		{
			length: 20
		}
	],
	'markdown-preferences/thematic-break-sequence-pattern': [
		'error',
		{
			pattern: '--- '
		},
	],
};
