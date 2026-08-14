import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import markdown from '@eslint/markdown';
import links from 'eslint-plugin-markdown-links';
import preferences from 'eslint-plugin-markdown-preferences';

await buildTypeGen('md', markdown, 'markdown.d.ts', { overwrite: true });
await buildTypeGen('markdown-links', links, 'markdown-links.d.ts', { overwrite: true });
await buildTypeGen('markdown-preferences', preferences, 'markdown-preferences.d.ts', { overwrite: true });
