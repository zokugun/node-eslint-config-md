import type { EditorConfigOptions, Registrator, Resolver } from '@zokugun/eslint-toolkit';
import type { MarkdownPreferencesRuleOptions } from '../typegens/markdown-preferences.js';

export function markdown(resolve: Resolver, register: Registrator): Partial<MarkdownPreferencesRuleOptions> {
	const rules: Partial<MarkdownPreferencesRuleOptions> = {};
	const config = resolve<EditorConfigOptions>('editorconfig/md');

	if(config) {
		const {
			indent_size,
			indent_style,
			trim_trailing_whitespace,
		} = config;

		if (indent_style === 'space') {
			const indentSize = Number(indent_size);

			rules['markdown-preferences/no-tabs'] = [
				'error',
				{
					checkTarget: 'all',
					codeBlockTabWidth: indentSize,
				},
			];

			rules['markdown-preferences/indent'] = [
				'error',
				{
					listItems: {
						first: 1,
						other: indentSize,
						relativeTo: 'markerStart',
					},
				},
			];

			register('embedded/indent', indentSize);
		}
		else if (indent_style === 'tab') {
			rules['markdown-preferences/no-tabs'] = ['off'];

			rules['markdown-preferences/indent'] = [
				'off',
			];

			register('embedded/indent', 'tab');
		}

		if(trim_trailing_whitespace === 'true') {
			rules['markdown-preferences/no-trailing-spaces'] = ['error'];
		}
		else if(trim_trailing_whitespace === 'false') {
			rules['markdown-preferences/no-trailing-spaces'] = ['off'];
		}
	}

	return rules;
}
