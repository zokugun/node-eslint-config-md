import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import markdown from '@eslint/markdown';
import links from 'eslint-plugin-markdown-links';
import preferences from 'eslint-plugin-markdown-preferences';

await buildTypeGen({
	name: 'md',
	plugin: markdown,
	fileName: 'markdown.d.ts',
	typeName: 'MarkdownRuleOptions',
	overwrite: true,
});

await buildTypeGen({
	name: 'markdown-links',
	plugin: links,
	overwrite: true,
});

await buildTypeGen({
	name: 'markdown-preferences',
	plugin: preferences,
	overwrite: true,
});
