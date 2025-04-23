import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends('eslint:recommended', 'plugin:astro/all'),
    languageOptions: {
      globals: { ...globals.node, ...globals.browser, dataLayer: false },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: { parser: tsParser, extraFileExtensions: ['.astro'] },
    },
    rules: { 'astro/no-set-html-directive': 'off' },
    processor: 'astro/client-side-ts',
  },
  { files: ['**/*.ts'], languageOptions: { parser: tsParser } },
]);
