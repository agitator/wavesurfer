require.config({
    paths: {
        "pat-wavesurfer":    "src/pat-wavesurfer",
        "wavesurfer":        "bower_components/wavesurfer/dist/wavesurfer-src",
        // BASE DEPENDENCIES
        "jquery":            "bower_components/jquery/dist/jquery",
        "jquery.browser":    "bower_components/jquery.browser/dist/jquery.browser",
        "logging":           "bower_components/logging/src/logging",
        "pat-base":          "bower_components/patternslib/src/core/base",
        "pat-compat":        "bower_components/patternslib/src/core/compat",
        "pat-jquery-ext":    "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":        "bower_components/patternslib/src/core/logger",
        "pat-mockup-parser": "bower_components/patternslib/src/core/mockup-parser",
        "pat-parser":        "bower_components/patternslib/src/core/parser",
        "pat-registry":      "bower_components/patternslib/src/core/registry",
        "pat-utils":         "bower_components/patternslib/src/core/utils",
        "underscore":        "bower_components/underscore/underscore"

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
