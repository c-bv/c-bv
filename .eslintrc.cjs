module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'src/components/ui'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'unused-imports', 'react', 'react-refresh'],
    rules: {
        semi: 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'unused-imports/no-unused-imports': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    },
    settings: {
        react: { version: 'detect' }
    }
};
