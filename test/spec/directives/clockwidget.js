'use strict';

describe('Directive: clockWidget', function () {

  // load the directive's module
  beforeEach(module('carpcFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<clock-widget></clock-widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the clockWidget directive');
  }));
});
