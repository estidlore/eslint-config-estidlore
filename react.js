module.exports = {
  extends: ["./typescript"],
  globals: {
    JSX: false,
    React: false
  },
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
        "max-lines-per-function": ["error", 150]
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    "react/display-name": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function"
      }
    ],
    "react/hook-use-state": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        children: "always",
        props: "always"
      }
    ],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-handler-names": "error",
    "react/jsx-key": "error",
    "react/jsx-max-depth": [
      "error",
      {
        max: 5
      }
    ],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": [
      "error",
      {
        allow: "single-child"
      }
    ],
    "react/jsx-uses-vars": "error",
    "react/no-children-prop": "error",
    "react/no-deprecated": "error",
    "react/no-multi-comp": [
      "error",
      {
        ignoreStateless: false
      }
    ],
    "react/no-unescaped-entities": "error",
    "react/prop-types": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
