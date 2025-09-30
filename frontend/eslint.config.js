import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // REPLACE WITH MY OWN FOLDERS

      // zones: [
      //   // --- No cross-feature imports ---
      //   {
      //     target: './src/features/auth',
      //     from: './src/features',
      //     except: ['./auth'],
      //   },
      //   {
      //     target: './src/features/comments',
      //     from: './src/features',
      //     except: ['./comments'],
      //   },
      //   {
      //     target: './src/features/discussions',
      //     from: './src/features',
      //     except: ['./discussions'],
      //   },
      //   {
      //     target: './src/features/teams',
      //     from: './src/features',
      //     except: ['./teams'],
      //   },
      //   {
      //     target: './src/features/users',
      //     from: './src/features',
      //     except: ['./users'],
      //   },

      //   // --- Unidirectional imports ---
      //   { target: './src/features', from: './src/app' },
      //   {
      //     target: [
      //       './src/components',
      //       './src/hooks',
      //       './src/lib',
      //       './src/types',
      //       './src/utils',
      //     ],
      //     from: ['./src/features', './src/app'],
      //   },
      // ],
    },
  },
]);
