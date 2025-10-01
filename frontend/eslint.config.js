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
      zones: [
        // --- No cross-feature imports ---
        {
          target: './src/features/landing',
          from: './src/features',
          except: ['./landing'],
        },
        {
          target: './src/features/games',
          from: './src/features',
          except: ['./games'],
        },
        {
          target: './src/features/lists',
          from: './src/features',
          except: ['./lists'],
        },
        {
          target: './src/features/players',
          from: './src/features',
          except: ['./players'],
        },

        // --- Unidirectional imports ---
        { target: './src/features', from: './src/app' },
        {
          target: [
            './src/assets',
            './src/components',
            './src/hooks',
            './src/lib',
            './src/types',
            './src/utils',
          ],
          from: ['./src/features', './src/app'],
        },
      ],
    },
  },
]);
