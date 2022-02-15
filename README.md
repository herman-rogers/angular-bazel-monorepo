# angular-bazel-monorepo

Example angular bazel monorepo using rules_nodejs

Run `yarn build` to build all projects and packages.

## Structure

The structure of the monorepo is:

Bazel WORKSPACE at the root then all libraries in `packages/`, all apps in `projects/`, and all bazel specific tools in `tools/`.

Each package / project as its own tsconfig along with its own dependency chain (package.json / node_modules).

The current structure is:

> at the root

- WORKSPACE
- package.json
- tsconfig.json

- packages

  - libOne
    - tsconfig.json
    - package.json

- projects

  - project_one
    - tsconfig.json
    - package.json
  - app2
    - tsconfig.json
    - package.json

- tools
  - libOne
  - project_one
  - app2

## Javascript Library

packages/libJs imports javascript into the Bazel ecosystem for Angular. It uses two specific rules `js_library` and `ts_project` which allows javascript to be imported, with manually generated declaration files, and can then be imported in other parts of the monorepo.

To generate .d.ts files run `tsc packages/**/*.js --declaration --allowJs --emitDeclarationOnly`.
