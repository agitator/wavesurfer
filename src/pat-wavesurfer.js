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
            patterns.wavesurfer, ;
    }
}(this, function($, Base, registry, Parser, logger, L) {
    'use strict';

    var log = logger.getLogger('pat-wavesurfer');
    log.debug('pattern loaded');

    var parser = new Parser('wavesurfer');

    // default controls
    parser.addArgument('fullscreencontrol', true);
    parser.addArgument('zoomcontrol', true);

    // disabled controls
    parser.addArgument('minimap', false);


    return Base.extend({
        name: 'wavesurfer',
        trigger: '.pat-wavesurfer',

        init: function initUndefined () {
            var options = this.options = parser.parse(this.$el);

            var baseLayers,
                marker_layer;

            // MAP INIT
            var map = this.map = new L.Map(this.$el[0], {
                fullscreenControl: options.fullscreencontrol,
                zoomControl: options.zoomcontrol,
                // Leaflet.Sleep options
                sleep: true,
                sleepNote: false,
                hoverToWake: false,
                sleepOpacity: 1
            });

            log.debug('pattern initialized');
        },



    });
}));
