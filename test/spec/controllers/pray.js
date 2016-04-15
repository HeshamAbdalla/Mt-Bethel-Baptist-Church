'use strict';

describe('Controller: PrayCtrl', function () {

  // load the controller's module
  beforeEach(module('churchAngApp'));

  var PrayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrayCtrl = $controller('PrayCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrayCtrl.awesomeThings.length).toBe(3);
  });
});
