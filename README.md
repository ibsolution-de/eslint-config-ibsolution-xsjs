# ESLint XSJS Rules

ESlint ruleset for XSJS projects

## Add Eslint to your XSJS project

```
npm install --save-dev  eslint eslint-config-recommended eslint-plugin-import eslint-plugin-prettier prettier
```

Add .eslintrc setup with content:

```
{
  "extends": ["esnext", "esnext/style-guide"],
  "plugins": ["prettier"]
}
```

## Add XSJS ruleset to project

```
npm install --save-dev @ibsolution/eslint-config-ibsolution-base @ibsolution/eslint-config-ibsolution-xsjs
```

Add .eslintrc setup with content:

```
{
  "extends": ["esnext", "esnext/style-guide", "@ibsolution/ibsolution-xsjs"],
  "plugins": ["prettier"]
}
```

## VScode setup

.vscode/settings.json

```
{
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": true,
  "files.exclude": {
    "**/.DS_Store": true,
    "**/node_modules/": true
  },
  "files.associations": {
    "*.xsjs": "xsjavascript",
    "*.xsjslib": "xsjavascriptlib"
  },
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    { "language": "xsjavascript", "autoFix": true },
    { "language": "xsjavascriptlib", "autoFix": true }
  ]
}
```
