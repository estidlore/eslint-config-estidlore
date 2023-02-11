module.exports = {
  env: {
    jest: true
  },
  plugins: ["jest"],
  rules: {
    "jest/consistent-test-it": "error",
    "jest/expect-expect": "error",
    "jest/max-nested-describe": [
      "error",
      {
        max: 3
      }
    ],
    "jest/no-alias-methods": "error",
    "jest/no-conditional-in-test": "error",
    "jest/no-deprecated-functions": "error",
    "jest/no-disabled-tests": "error",
    "jest/no-done-callback": "error",
    "jest/no-duplicate-hooks": "error",
    "jest/no-export": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/no-interpolation-in-snapshots": "error",
    "jest/no-jasmine-globals": "error",
    "jest/no-mocks-import": "error",
    "jest/no-standalone-expect": "error",
    "jest/no-test-prefixes": "error",
    "jest/prefer-comparison-matcher": "error",
    "jest/prefer-expect-assertions": "error",
    "jest/prefer-hooks-in-order": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/prefer-strict-equal": "error",
    "jest/prefer-to-be": "error",
    "jest/prefer-to-contain": "error",
    "jest/prefer-to-have-length": "error",
    "jest/prefer-todo": "error",
    "jest/require-to-throw-message": "error",
    "jest/require-top-level-describe": "error",
    "jest/valid-describe-callback": "error",
    "jest/valid-expect": "error",
    "jest/valid-expect-in-promise": "error",
    "jest/valid-title": "error"
  }
};
