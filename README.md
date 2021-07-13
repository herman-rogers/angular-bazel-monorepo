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
  - app1
    - tsconfig.json
    - package.json
  - app2
    - tsconfig.json
    - package.json

- tools
  - libOne
  - app1
  - app2
