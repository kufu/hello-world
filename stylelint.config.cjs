module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-html',
  rules: {
    'value-keyword-case': null,
    'function-name-case': null,
    'declaration-empty-line-before': null,
    'selector-attribute-quotes': 'always',
    'font-family-name-quotes': 'always-where-required',
    'color-hex-length': 'short',
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'selector-class-pattern': null,
  },
};
