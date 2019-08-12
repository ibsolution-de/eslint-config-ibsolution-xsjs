module.exports = {
  extends: ["@ibsolution/ibsolution-base"].concat(["./rules/xsjs"].map(require.resolve)),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "script"
  },
  ecmaFeatures: {
    jsx: false,
    impliedStrict: true,
    globalReturn: false,
    arrowFunctions: true,
    blockBindings: true,
    classes: false,
    defaultParameters: true,
    destructuring: true,
    forOf: false,
    generators: true,
    modules: false,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    regexUFlag: true,
    regexYFlag: true,
    restParams: true,
    spread: true,
    templateStrings: true,
    unicodeCodePointEscapes: true
  },
  env: {
    jquery: true,
    es6: true
  },
  globals: {
    Promise: "off",
    _: true
  }
};
