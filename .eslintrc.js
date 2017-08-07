module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    'jsx-a11y/href-no-hash': 'off',
    'import/no-named-as-default': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-named-as-default-member': 'off',
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }]
  }
};