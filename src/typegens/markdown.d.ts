/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Require languages for fenced code blocks
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/fenced-code-language.md
   */
  'md/fenced-code-language'?: Linter.RuleEntry<MdFencedCodeLanguage>
  /**
   * Require or disallow metadata for fenced code blocks
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/fenced-code-meta.md
   */
  'md/fenced-code-meta'?: Linter.RuleEntry<MdFencedCodeMeta>
  /**
   * Enforce heading levels increment by one
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/heading-increment.md
   */
  'md/heading-increment'?: Linter.RuleEntry<MdHeadingIncrement>
  /**
   * Disallow bare URLs
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-bare-urls.md
   */
  'md/no-bare-urls'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-definitions.md
   */
  'md/no-duplicate-definitions'?: Linter.RuleEntry<MdNoDuplicateDefinitions>
  /**
   * Disallow duplicate headings in the same document
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-headings.md
   */
  'md/no-duplicate-headings'?: Linter.RuleEntry<MdNoDuplicateHeadings>
  /**
   * Disallow empty definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-definitions.md
   */
  'md/no-empty-definitions'?: Linter.RuleEntry<MdNoEmptyDefinitions>
  /**
   * Disallow empty images
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-images.md
   */
  'md/no-empty-images'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty links
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-links.md
   */
  'md/no-empty-links'?: Linter.RuleEntry<[]>
  /**
   * Disallow HTML tags
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-html.md
   */
  'md/no-html'?: Linter.RuleEntry<MdNoHtml>
  /**
   * Disallow invalid label references
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-invalid-label-refs.md
   */
  'md/no-invalid-label-refs'?: Linter.RuleEntry<[]>
  /**
   * Disallow headings without a space after the hash characters
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-atx-heading-space.md
   */
  'md/no-missing-atx-heading-space'?: Linter.RuleEntry<MdNoMissingAtxHeadingSpace>
  /**
   * Disallow missing label references
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-label-refs.md
   */
  'md/no-missing-label-refs'?: Linter.RuleEntry<MdNoMissingLabelRefs>
  /**
   * Disallow link fragments that do not reference valid headings
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-link-fragments.md
   */
  'md/no-missing-link-fragments'?: Linter.RuleEntry<MdNoMissingLinkFragments>
  /**
   * Disallow multiple H1 headings in the same document
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-multiple-h1.md
   */
  'md/no-multiple-h1'?: Linter.RuleEntry<MdNoMultipleH1>
  /**
   * Disallow URLs that match defined reference identifiers
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-reference-like-urls.md
   */
  'md/no-reference-like-urls'?: Linter.RuleEntry<[]>
  /**
   * Disallow reversed link and image syntax
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-reversed-media-syntax.md
   */
  'md/no-reversed-media-syntax'?: Linter.RuleEntry<[]>
  /**
   * Disallow spaces around emphasis markers
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-space-in-emphasis.md
   */
  'md/no-space-in-emphasis'?: Linter.RuleEntry<MdNoSpaceInEmphasis>
  /**
   * Disallow unused definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-unused-definitions.md
   */
  'md/no-unused-definitions'?: Linter.RuleEntry<MdNoUnusedDefinitions>
  /**
   * Require alternative text for images
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/require-alt-text.md
   */
  'md/require-alt-text'?: Linter.RuleEntry<[]>
  /**
   * Disallow data rows in a GitHub Flavored Markdown table from having more cells than the header row
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/table-column-count.md
   */
  'md/table-column-count'?: Linter.RuleEntry<MdTableColumnCount>
}

/* ======= Declarations ======= */
// ----- md/fenced-code-language -----
type MdFencedCodeLanguage = []|[{
  required?: string[]
}]
// ----- md/fenced-code-meta -----
type MdFencedCodeMeta = []|[("always" | "never")]
// ----- md/heading-increment -----
type MdHeadingIncrement = []|[{
  frontmatterTitle?: string
}]
// ----- md/no-duplicate-definitions -----
type MdNoDuplicateDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]
// ----- md/no-duplicate-headings -----
type MdNoDuplicateHeadings = []|[{
  checkSiblingsOnly?: boolean
}]
// ----- md/no-empty-definitions -----
type MdNoEmptyDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]
// ----- md/no-html -----
type MdNoHtml = []|[{
  allowed?: string[]
  allowedIgnoreCase?: boolean
}]
// ----- md/no-missing-atx-heading-space -----
type MdNoMissingAtxHeadingSpace = []|[{
  checkClosedHeadings?: boolean
}]
// ----- md/no-missing-label-refs -----
type MdNoMissingLabelRefs = []|[{
  allowLabels?: string[]
}]
// ----- md/no-missing-link-fragments -----
type MdNoMissingLinkFragments = []|[{
  ignoreCase?: boolean
  allowPattern?: string
}]
// ----- md/no-multiple-h1 -----
type MdNoMultipleH1 = []|[{
  frontmatterTitle?: string
}]
// ----- md/no-space-in-emphasis -----
type MdNoSpaceInEmphasis = []|[{
  checkStrikethrough?: boolean
}]
// ----- md/no-unused-definitions -----
type MdNoUnusedDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]
// ----- md/table-column-count -----
type MdTableColumnCount = []|[{
  checkMissingCells?: boolean
}]
