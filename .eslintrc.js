module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        "plugin:prettier/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react",
        'prettier',
    ],
    "rules": {
        'linebreak-style': 'off',
        "react/jsx-indent": [2, 4],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        "react/require-default-props": "off",
        'react/react-in-jsx-scope': 'off',
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
        "prettier/prettier": ["error", { "endOfLine": "auto", "printWidth": 80, "trailingComma": "es5", "semi": true, "doubleQuote": true, "jsxSingleQuote": true, "singleQuote": false, "useTabs": false, "tabWidth": 4 }],
        "no-shadow": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": false
            }
        ]
    }
}
