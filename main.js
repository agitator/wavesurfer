require.config({
    paths: {
        "pat-wavesurfer":    "src/pat-wavesurfer",
        "wavesurfer":        "node_modules/wavesurfer/dist/wavesurfer",
        // BASE DEPENDENCIES
        "jquery":            "node_modules/jquery/dist/jquery",
        "jquery.browser":    "node_modules/jquery.browser/dist/jquery.browser",
        "logging":           "node_modules/logging/src/logging",
        "pat-base":          "node_modules/patternslib/src/core/base",
        "pat-compat":        "node_modules/patternslib/src/core/compat",
        "pat-jquery-ext":    "node_modules/patternslib/src/core/jquery-ext",
        "pat-logger":        "node_modules/patternslib/src/core/logger",
        "pat-mockup-parser": "node_modules/patternslib/src/core/mockup-parser",
        "pat-parser":        "node_modules/patternslib/src/core/parser",
        "pat-registry":      "node_modules/patternslib/src/core/registry",
        "pat-utils":         "node_modules/patternslib/src/core/utils",
        "underscore":        "node_modules/underscore/underscore"

    },
    "shim": {
        "logging": { "exports": "logging" }
    },
    wrapShim: true
});

require(["jquery", "pat-registry", "pat-wavesurfer"], function($, registry, pattern) {
    window.patterns = registry;
    $(document).ready(function() {
        registry.init();
    });
});
