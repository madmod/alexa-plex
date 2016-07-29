/**
 * @module Plex
 */

"use strict";
var PlexControl = require('plex-control');
var plexutils = require('./plexutils');
var user = require('./user');


require('dotenv').load('../');

/**
 * The app config used in all Plex API requests for the X-Plex headers describing this app
 * @const
 * @type {{product: {String}, version: {String}, device: {String}, deviceName: {String}, identifier: {String}}}
 */
var PLEX_APP_CONFIG = {
    product: process.env.APP_PRODUCT,
    version: process.env.APP_VERSION,
    device: process.env.APP_DEVICE,
    deviceName: process.env.APP_DEVICE_NAME,
    identifier: process.env.APP_IDENTIFIER
};

/**
 * Creates a new Plex object, which handles the stateful objects from the plex-api library
 * @constructor Plex
 * @classdesc A container for the multiple stateful plex-api objects needed for the app
 */
var PlexControl = function (app) {
    var context = this;
    this._app = app;


    module.exports = {
        PlexControl: control,
	    pause: pause,
	    resume: resume
    };

    var pause = function () {
        var control = new PlexControl(this._app.user.server, this._app.user.client);
        control.playback.pause();
    };

    var resume = function () {
        var control = new PlexControl(this._app.user.server, this._app.user.client);
        control.playback.play();
    };

};