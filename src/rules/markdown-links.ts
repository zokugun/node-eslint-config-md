import type { RuleOptions } from '../typegens/markdown-links.js';

export const rules: Required<RuleOptions> = {
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
