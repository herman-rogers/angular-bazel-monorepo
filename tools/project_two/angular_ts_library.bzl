"Shows how to enable both worker mode and use_angular_plugin to make a drop-in replacement for ng_module"

load("@npm//@bazel/typescript:index.bzl", "ts_project")

def ng_ts_project(deps = [], **kwargs):
    deps = [
        "@npm_shared_components//:node_modules",
    ] + deps

    ts_project(
        tsc = "@npm_project_two//@angular/compiler-cli/bin:ngc",
        tsconfig = "//projects/project_two:tsconfig",
        declaration = True,
        declaration_map = True,
        deps = deps,
        **kwargs
    )
