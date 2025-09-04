import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
'no-multiple-empty-lines': ['error', {
        max: 1, // максимум 2 пустые строки подряд
        maxEOF: 0, // максимум 1 пустая строка в конце файла
        maxBOF: 0 // запрет пустых строк в начале файла
      }],
      'no-trailing-spaces': 'error', // запрет пробелов в конце строк
      'no-whitespace-before-property': 'error', // запрет пробелов перед точкой
      'space-in-parens': ['error', 'never'], // без пробелов внутри скобок
      'array-bracket-spacing': ['error', 'never'], // без пробелов в квадратных скобках
      'object-curly-spacing': ['error', 'always'], // пробелы внутри фигурных скобок
      'block-spacing': ['error', 'always'], // пробелы внутри блоков
      'comma-spacing': ['error',  { // пробелы после запятых
        before: false,
        after: true
       }],
      'keyword-spacing': ['error', { // пробелы вокруг ключевых слов
        before: true,
        after: true
      }],
      'space-before-blocks': 'error', // пробел перед блоком
      'space-before-function-paren': ['error', { // пробел перед function
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }],
      'space-infix-ops': 'error', // пробелы вокруг операторов
      'arrow-spacing': ['error', { // пробелы вокруг стрелки
        before: true,
        after: true
      }],
      'generator-star-spacing': ['error', { // пробелы вокруг *
        before: true,
        after: false
      }],
      'rest-spread-spacing': ['error', 'never'], // без пробелов в spread
      'template-curly-spacing': ['error', 'never'], // без пробелов в template literals
      'yield-star-spacing': ['error', { // пробелы вокруг yield*
        before: true,
        after: false
      }],
      'spaced-comment': ['error', 'always'], // пробелы в комментариях
      'eol-last': ['error', 'never'], // пустая строка в конце файла
      semi: ['error'],
      quotes: ['error', 'single'],
      'prefer-template': ['error'],
      'prefer-arrow-callback': ['error'],
      'consistent-return': 'error',
      '@typescript-eslint/no-empty-interface': [
        'error',
        { allowSingleExtends: true },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
    },
  }),
];
export default eslintConfig;