(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'jquery',
            'pat-base',
            'pat-registry',
            'pat-parser',
            'pat-logger',
            'wavesurfer'
        ], function() {
            return factory.apply(this, arguments);
        });
    } else {
        // If require.js is not available, you'll need to make sure that these
        // global variables are available.
        factory($, patterns.Base, patterns, patterns.Parser, patterns.logger,
            patterns.wavesurfer);
    }
}(this, function($, Base, registry, Parser, logger, W) {
    'use strict';

    var log = logger.getLogger('pat-wavesurfer');
    log.debug('pattern loaded');

    var parser = new Parser('wavesurfer');

    // // default controls
    parser.addArgument('url', false);
    // parser.addArgument('zoomcontrol', true);

    // // disabled controls
    // parser.addArgument('minimap', false);

    $("[data-pat-wavesurfer]").each(function() {
        var options = parser.parse($(this));
    });

    return Base.extend({
        name: 'wavesurfer',
        trigger: '.pat-wavesurfer',

        init: function initUndefined () {
            var options = this.options = parser.parse(this.$el);

            var wavesurfer = WaveSurfer.create({
                container: '.pat-wavesurfer'
            });
            wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

            this.$el.prepend('<button class="btn btn-primary" onclick="wavesurfer.playPause()">\
                                    Play\
                                </button>\
                            ');


            // wavesurfer.playPause()


            log.debug('pattern initialized');
        },

    });


}));
