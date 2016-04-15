'use strict';

/**
 * @ngdoc overview
 * @name churchAngApp
 * @description
 * # churchAngApp
 *
 * Main module of the application.
 */
 
angular
  .module('churchAngApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pray', {
        templateUrl: 'views/pray.html',
        controller: 'PrayCtrl',
        controllerAs: 'pray'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
