'use strict';

/**
 * @ngdoc function
 * @name churchAngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the churchAngApp
 */
angular.module('churchAngApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.about = '/about';
  });
