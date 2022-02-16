"Shows how to enable both worker mode and use_angular_plugin to make a drop-in replacement for ng_module"

load("@npm//@bazel/typescript:index.bzl", "ts_project")

def ng_ts_project(**kwargs):
    ts_project(
        tsc = "@npm_shared_components//@angular/compiler-cli/bin:ngc",
        tsconfig = "//packages/shared_components:tsconfig",
        declaration = True,
        declaration_map = True,
        **kwargs
    )
