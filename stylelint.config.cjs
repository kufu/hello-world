module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  customSyntax: 'postcss-html',
  rules: {
    'value-keyword-case': null,
    'property-case': 'lower',
    'unit-case': 'lower',
    'function-name-case': null,
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-empty-line-before': null,
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'string-quotes': 'single',
    'font-family-name-quotes': 'always-where-required',
    'value-list-comma-space-after': 'always',
    'number-leading-zero': 'always',
    'color-hex-length': 'short',
    'color-hex-case': 'lower',
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'selector-class-pattern': null,
  },
}