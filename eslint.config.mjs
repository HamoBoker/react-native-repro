import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNativePlugin from '@react-native/eslint-plugin';
import eslintReactNative from 'eslint-plugin-react-native';
import { defineConfig } from 'eslint/config';
import { fixupPluginRules } from '@eslint/compat';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [js.configs.recommended],
  },
  reactHooks.configs.flat.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    name: 'eslint-plugin-react-native',
    plugins: {
      'react-native': fixupPluginRules({
        rules: eslintReactNative.rules,
      }),
    },
    rules: {
      ...eslintReactNative.configs.all.rules,
      'react-native/sort-styles': 'off',
      'react-native/no-inline-styles': 'warn',
    },
  },
  {
    // extends: ['react-hooks/recommended'],
    plugins: {
      '@react-native': reactNativePlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off',

      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/refs': 'warn',
      'react-native/no-color-literals': 'off',

      'comma-dangle': 'off',
      'prefer-const': 'warn',
      semi: 'off',

      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          printWidth: 130,
          arrowParens: 'avoid',
          bracketSameLine: false,
          bracketSpacing: false,
          trailingComma: 'none',
          endOfLine: 'lf',
        },
      ],
    },
  },
]);
