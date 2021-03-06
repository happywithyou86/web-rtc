(function() {
  'use strict';

  var path      = require('path'),
      mongoose  = require('mongoose'),
      nunjucks  = require('nunjucks'),
      Promise   = require('bluebird'),
      rootPath  = path.normalize(__dirname + '/../../'),
      service   = '../services/';

  module.exports = {

    rootPath          : rootPath,
    authorize         : require(service + 'authorize'),
    clusterService    : require(service + './cluster'),
    config            : require('./settings.config'),
    createSendToken   : require(service + './createSendToken'),
    error             : require(service + './error'),
    facebookAuth      : require(service + './facebookAuth'),
    get               : require(service + './get'),
    googleAuth        : require(service + './googleAuth'),
    User              : require('../model/User'),
    mongoDB           : require('../configuration/mongodb'),
    socket            : require(service + './socket'),
    xPoweredBy        : require(service + './xPoweredBy'),
    use_app           : require('./use_app.config'),
    use_api           : require('./use_api.config'),

    /*elastic_search service*/
    elastic_search_interest               : require(service + './elastic_search_interest'),
    elastic_search_location               : require(service + './elastic_search_location'),
    elastic_search_location_with_interest : require(service + './elastic_search_location_with_interest'),
    elastic_search_random                 : require(service + './elastic_search_random'),

    args              : require('yargs').argv,
    bodyParser        : require('body-parser'),
    chalk             : require('chalk'),
    cluster           : require('cluster'),
    compression       : require('compression'),
    express           : require('express'),
    expressSession    : require('express-session'),
    favicon           : require('serve-favicon'),
    jwt               : require('jwt-simple'),
    LocalStrategy     : require('passport-local').Strategy,
    logger            : require('morgan'),
    methodOverride    : require('method-override'),
    moment            : require('moment'),
    mongoose          : Promise.promisifyAll(mongoose),
    multer            : require('multer'),
    numCPUs           : require('os').cpus().length,
    nunjucks          : require('nunjucks'),
    nunjucksEnv       : new nunjucks.Environment(new nunjucks.FileSystemLoader
      (path.join(rootPath, 'views'))),
    nunjucksEnvBuild  : new nunjucks.Environment(new nunjucks.FileSystemLoader
      (path.join(rootPath, 'build'))),
    passport          : require('passport'),
    Promise           : require('bluebird'),
    qs                : require('querystring'),
    request           : require('request-promise'),
    shortID           : require('shortid'),
    url               : require('url'),

    port              : process.env.PORT || 3000,
    environment       : process.env.NODE_ENV || 'development',

    faviconPath       : rootPath + 'front-end/resources/favicon.ico',
    nunjucksPath      : path.join(rootPath, 'front-end/views'),
    nunjucksPathBuild : path.join(rootPath, 'build'),
    css               : path.join(rootPath, 'front-end/resources/css'),
    fonts             : path.join(rootPath, 'front-end/resources/fonts'),
    img               : path.join(rootPath, 'front-end/resources/img'),
    js                : path.join(rootPath, 'front-end/resources/js'),
    compiledCss       : path.join(rootPath, 'front-end/.tmp'),
    bowerComponents   : path.join(rootPath, 'front-end/bower'),
    commonViews       : path.join(rootPath, 'front-end/views/commons'),

    buildCss          : path.join(rootPath, 'build/css'),
    buildFonts        : path.join(rootPath, 'build/fonts'),
    buildImg          : path.join(rootPath, 'build/img'),
    buildJs           : path.join(rootPath, 'build/js'),
    commonViewsBuild  : path.join(rootPath, 'build/commons')
  };
}());
