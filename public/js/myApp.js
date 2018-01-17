/**
 * Created by elimenchaca on 11/9/17.
 */
'use strict';

// create the module and name it myApp
var myApp = angular.module('myApp', ['ngRoute']);

// configure our myApp
myApp.config( function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'pages/welcome.html',
            controller  : 'welcomePageController'
        })

        .when('/orientation', {
            templateUrl : 'pages/orientation.html',
            controller  : 'orientationPageController'
        })

        .when('/acceleration', {
            templateUrl : 'pages/acceleration.html',
            controller  : 'accelerationPageController'
        })

        .when('/geolocation', {
            templateUrl : 'pages/geolocation.html',
            controller  : 'geolocationPageController'
        })

        .when('/setup', {
            templateUrl : 'pages/setup.html',
            controller  : 'setupPageController'
        })
        
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutPageController'
        });
});