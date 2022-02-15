workspace(
    name = "angular-bazel-monorepo",
    managed_directories = {
        "@npm": ["node_modules"],
        "@npm_project_one": ["projects/project_one/node_modules"],
        "@npm_app2": ["projects/app2/node_modules"],
        "@npm_libOne": ["projects/libOne/node_modules"],
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "bazel_skylib",
    sha256 = "1c531376ac7e5a180e0237938a2536de0c54d93f5c278634818e0efc952dd56c",
    urls = [
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.3/bazel-skylib-1.0.3.tar.gz",
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.0.3/bazel-skylib-1.0.3.tar.gz",
    ],
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

# https://github.com/bazelbuild/rules_nodejs/releases
# Fetch rules_nodejs so we can install our npm dependencies
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "2644a66772938db8d8c760334a252f1687455daa7e188073f2d46283f2f6fbb7",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.6.2/rules_nodejs-4.6.2.tar.gz"],
)

# Check the bazel version and download npm dependencies
load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_version = "12.14.1",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
    exports_directories_only = False,
)

yarn_install(
    name = "npm_project_one",
    package_json = "//projects/project_one:package.json",
    package_path = "projects/project_one",
    yarn_lock = "//projects/project_one:yarn.lock",
    exports_directories_only = False,
)

yarn_install(
    name = "npm_app2",
    package_json = "//projects/app2:package.json",
    package_path = "projects/app2",
    yarn_lock = "//projects/app2:yarn.lock",
    exports_directories_only = False,
)

yarn_install(
    name = "npm_libOne",
    package_json = "//packages/libOne:package.json",
    package_path = "packages/libOne",
    yarn_lock = "//packages/libOne:yarn.lock",
    exports_directories_only = False,
)

yarn_install(
    name = "npm_angularLib",
    package_json = "//packages/angularLib:package.json",
    package_path = "packages/angularLib",
    yarn_lock = "//packages/angularLib:yarn.lock",
    exports_directories_only = False,
)

