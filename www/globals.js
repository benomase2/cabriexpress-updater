"use strict";
const params = new URLSearchParams(window.location.search);

var primary, fileToLoad, fileManager, toolbar, disableSounds, fps, altGraphKeys, env;

env = 'express';
primary=false;
fileManager = true;
fileToLoad = "express.clmc";
altGraphKeys = !!params.get("alt") || 1;
toolbar = "express";

disableSounds = true;






var Globals = {
    FileToLoad: params.get("clmc") || fileToLoad,
    Locale: params.get("lang"),
    LocaleDefault: 'en',
    Toolbar: toolbar,
    FileManager: fileManager,
    AltGraphKeys: altGraphKeys,
    Primary: primary,
    PageHorizon: params.has("horizon"),
    Blockly: params.get("blockly") || false,
    Fps: fps,
    //Premium
    //Profile: 'teacher',
    Profile: params.get("profile"),
    sendResultAfterValidation: false,
    //sendResultAfterValidation: false,
    //UsePremiumV2: true,
    UsePremiumV2: false,

	disableSounds: disableSounds,
    /*
    //TODO remove
    Profile: "teacher",
    Mode: "teacher",
    Env: undefined,
    LmsPostback: undefined,
    sendResultAfterValidation: false*/
};


function matchDevOrBeta() {
    var env = window.location.pathname.split('/')[1];
    return (env === 'dev') || (env === 'beta');
}