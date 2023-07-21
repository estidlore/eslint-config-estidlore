module.exports = {
  env: {
    node: true
  },
  extends: ["prettier"],
  plugins: ["import", "simple-import-sort"],
  rules: {
    camelcase: "error",
    "comma-spacing": "off",
    complexity: ["error", 20],
    "constructor-super": "error",
    curly: ["error", "all"],
    "default-param-last": "error",
    eqeqeq: "error",
    "id-length": [
      "error",
      {
        max: 30,
        min: 1
      }
    ],
    "import/export": "error",
    "import/exports-last": "error",
    "import/first": "error",
    "import/group-exports": "error",
    "import/newline-after-import": "error",
    "import/no-cycle": "error",
    "import/no-default-export": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-useless-path-segments": "error",
    "max-classes-per-file": ["error", 1],
    "max-depth": ["error", 5],
    "max-lines": ["error", 200],
    "max-lines-per-function": ["error", 50],
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-nested-ternary": "error",
    "no-obj-calls": "error",
    "no-param-reassign": "error",
    "no-restricted-syntax": ["error", "ExportDefaultDeclaration"],
    "no-unexpected-multiline": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-vars": "error",
    "no-useless-backreference": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true,
        objectsInObjects: true
      }
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports
          ["^\\u0000"],
          // Node.js builtins
          ["^node:"],
          // External packages
          ["^@?\\w"],
          // Internal packages
          ["^(assets|components|navigation|styles|types|utils|views)"],
          // Relative imports
          ["^\\."]
        ]
      }
    ],
    "sort-keys": ["error", "asc"],
    "sort-vars": [
      "error",
      {
        ignoreCase: true
      }
    ],
    "spaced-comment": "error",
    "valid-typeof": "error",
    yoda: "error"
  }
};
