# angular-bazel-monorepo

Example angular bazel monorepo using rules_nodejs

## Quick Start

Make sure to run `yarn install` at the root and for the `shared_components` directory.

You only need to run `yarn install` for each project you want to run.

To start a dev server run the bazel command per project, for example:

`yarn bazelisk //projects/project_two:devserver`

## Structure

The structure of the monorepo is:

Bazel WORKSPACE at the root then all libraries in `packages/`, all apps in `projects/`, and all bazel specific tools in `tools/`.

Each angular project in projects (and the shared library in packages) has its own package.json, node_modules, and tsconfig.

The javascript library and typescript library use normal bazel rules and only contain a tsconfig.json.

The current structure is:

> at the root

- WORKSPACE
- package.json
- tsconfig.json

- packages

  - lib_ts
    - tsconfig.json

- projects

  - project_one
    - tsconfig.json
    - package.json
  - project_two
    - tsconfig.json
    - package.json

- tools
  - project_one
  - project_two
  - shared_components

## Javascript Library

packages/lib_js imports javascript into the Bazel ecosystem for Angular. It uses two specific rules `js_library` and `ts_project` which allows javascript to be imported, with manually generated declaration files, and can then be imported in other parts of the monorepo.

To generate .d.ts files run `tsc packages/**/*.js --declaration --allowJs --emitDeclarationOnly`.
