workspace(
    name = "angular-bazel-monorepo",
    managed_directories = {
        "@npm": ["node_modules"],
        "@npm_app1": ["projects/app1/node_modules"],
        "@npm_app2": ["projects/app2/node_modules"],
        "@npm_libOne": ["projects/libOne/node_modules"],
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
name = "io_bazel_rules_webtesting",
sha256 = "f1f4d2c2f88d2beac64c82499a1e762b037966675dd892da89c87e39d72b33f6",
urls = [
"https://github.com/bazelbuild/rules_webtesting/releases/download/0.3.2/rules_webtesting.tar.gz",
],
)

load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

# https://github.com/bazelbuild/rules_nodejs/releases
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "e79c08a488cc5ac40981987d862c7320cee8741122a2649e9b08e850b6f20442",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.8.0/rules_nodejs-3.8.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
    exports_directories_only = True,
)

yarn_install(
    name = "npm_app1",
    package_json = "//projects/app1:package.json",
    package_path = "projects/app1",
    yarn_lock = "//projects/app1:yarn.lock",
    exports_directories_only = True,
)

yarn_install(
    name = "npm_app2",
    package_json = "//projects/app2:package.json",
    package_path = "projects/app2",
    yarn_lock = "//projects/app2:yarn.lock",
    exports_directories_only = True,
)

yarn_install(
    name = "npm_libOne",
    package_json = "//packages/libOne:package.json",
    package_path = "packages/libOne",
    yarn_lock = "//packages/libOne:yarn.lock",
    exports_directories_only = True,
)

yarn_install(
    name = "npm_angularLib",
    package_json = "//packages/angularLib:package.json",
    package_path = "packages/angularLib",
    yarn_lock = "//packages/angularLib:yarn.lock",
    exports_directories_only = True,
)

