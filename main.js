﻿"use strict";


require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'ui.router': 'bower_components/angular-ui-router/release/angular-ui-router',
        'angular-animate': 'bower_components/angular-animate/angular-animate',
        'jquery': 'bower_components/jquery/dist/jquery',
        _: 'bower_components/underscore/underscore'
    },

    waitSeconds: 0,

    shim: {
        "jquery": { exports: "$" },
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'ui.router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        }
    },
    priority: [
		"angular"
    ]
});



