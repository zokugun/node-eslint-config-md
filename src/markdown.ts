import type { Configurator, EditorConfigOptions, OptionFiles, OptionIgnores, OptionOverridesFiles, OptionOverridesIgnores, OptionRules } from '@zokugun/eslint-toolkit';

import plugin from '@eslint/markdown';

import { RuleOptions } from './typegens/markdown.js';
import { rules } from './rules/markdown.js';

type Options = OptionRules<RuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function markdown(options: Options = {}): Configurator {
	const files = options.overrides?.files ?? [
		'**/*.md',
		...(options.files ?? [])
	];

	const ignores = options.overrides?.ignores ?? options.ignores ?? [];

	return (resolve) => {
		const ecRules: Partial<RuleOptions> = {};
		const ecConfig = resolve<EditorConfigOptions>('editorconfig/md');

		if(ecConfig) {
			const {
				indent_size,
				indent_style,
			} = ecConfig;

			if (indent_style === 'space') {
				ecRules['indent'] = ['error', Number(indent_size)];
			}
			else if (indent_style === 'tab') {
				ecRules['indent'] = ['error', 'tab'];
			}
		}

		return {
			name: 'zokugun/md/rules',
			files,
			ignores,
			plugins: {
				md: plugin,
			},
			language: 'md/gfm',
			languageOptions: {
				frontmatter: 'yaml',
			},
			rules: {
				...rules,
				...ecRules,
				...options.rules,
			}
		};
	};
}
