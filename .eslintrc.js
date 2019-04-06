const paths = require('./config/paths');

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'plugin:security/recommended',
    ],
    globals: {
        __BROWSER__: true,
        __SERVER__: true,
    },
    plugins: ['babel', 'import', 'prettier', 'security', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                paths: paths.resolveModules,
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        'import/named': 0,
        'import/namespace': 0,
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'prettier/prettier': 'error',
    },
};
