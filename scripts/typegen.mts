import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import markdown from '@eslint/markdown';

await buildTypeGen('md', markdown, 'markdown.d.ts', { overwrite: true });
