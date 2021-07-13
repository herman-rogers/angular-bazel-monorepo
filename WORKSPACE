workspace(
    name = "angular-bazel-monorepo",
    managed_directories = {
      "@npm": ["node_modules"],
      "@npm_app1": ["projects/app1/node_modules"],
      "@npm_app2": ["projects/app2/node_modules"],
      "@npm_libOne": ["projects/libOne/node_modules"]
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# https://github.com/bazelbuild/rules_nodejs/releases
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "10f534e1c80f795cffe1f2822becd4897754d18564612510c59b3c73544ae7c6",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.5.0/rules_nodejs-3.5.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

yarn_install(
    name = "npm_app1",
    package_json = "//projects/app1:package.json",
    package_path = "projects/app1",
    yarn_lock = "//projects/app1:yarn.lock",
)

yarn_install(
    name = "npm_app2",
    package_json = "//projects/app2:package.json",
    package_path = "projects/app2",
    yarn_lock = "//projects/app2:yarn.lock",
)

yarn_install(
    name = "npm_libOne",
    package_json = "//packages/libOne:package.json",
    package_path = "packages/libOne",
    yarn_lock = "//packages/libOne:yarn.lock",
)
