import type { MarkdownLinksRuleOptions } from '../typegens/markdown-links.js';

export const linksRules: Required<MarkdownLinksRuleOptions> = {
	'markdown-links/no-dead-urls': [
		'off',
	],
	'markdown-links/no-missing-fragments': [
		'off',
	],
	'markdown-links/no-missing-path': [
		'error',
	],
	'markdown-links/no-self-destination': [
		'error',
	],
};
