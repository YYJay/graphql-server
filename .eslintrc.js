const path = require('path')
module.exports = {
  'parser'  : 'babel-eslint',
  'extends' : [
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  'plugins': [
    'babel', 'react', 'flowtype',
  ],
  'rules': {
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
    // overwrite airbnb's config
    'no-console': [1, { allow: ["warn", "error"] }],
    'jsx-a11y/anchor-is-valid': 0,
    "jsx-a11y/label-has-for": [2, {
      "components": ["Label"],
      "required": {
        "every": ["id"]
      },
      "allowChildren": false
    }],
    'no-underscore-dangle': 0,
    'react/sort-comp': [2, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'postcss.config.js'
      ],
      optionalDependencies: false,
    }],
    'import/no-named-as-default': 0,
  },
  settings: {},
}
