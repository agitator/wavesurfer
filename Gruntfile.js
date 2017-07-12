/* global module */
module.exports = function(grunt) {
    "use strict";

    var dest_path = "src/build/";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            options: {
                separator: grunt.util.linefeed + grunt.util.linefeed
            },
            js: {
                src: [
                    "src/node_modules/wavesurfer/dist/wavesurfer.js"
                ],
                dest: dest_path + "libs.js"
            },
            css: {
                src: [
                    // "src/bower_components/leaflet/dist/leaflet.css",
                ],
                dest: dest_path + "libs.css"
            }
        },

        uglify: {
            default: {
                options: {
                    sourceMap: true,
                    sourceMapName: dest_path + "libs.min.js.map",
                    sourceMapIncludeSources: false
                },
                files: {
                    "src/build/libs.min.js": [
                        dest_path + "libs.js"
                    ]
                }
            }
        },

        copy: {
            main: {
                files: [{
                    // expand: true,
                    // cwd: "src/bower_components/font-awesome/fonts/",
                    // src: ["**"],
                    // dest: dest_path + "fonts/"
                }]
            }
        },

        sed: {
            // "fontawesome": {
            //     path: dest_path + "libs.css",
            //     pattern: "../fonts/fontawesome",
            //     replacement: "fonts/fontawesome"
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-sed");

    // Default task(s).
    grunt.registerTask("default", ["concat", "uglify", "copy", "sed"]);

};
