// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Configuración base de ESLint
  js.configs.recommended,

  // Tu configuración personalizada
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Reglas base de Prettier integradas directamente
      ...prettierPlugin.configs.recommended.rules,

      // Opcional: tus ajustes personalizados de formato
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
    },
  },
];
