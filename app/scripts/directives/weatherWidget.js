'use strict';

/**
 * @ngdoc directive
 * @name carpcFrontApp.directive:weatherWidget
 * @description
 * # weatherWidget
 */
angular.module('carpcFrontApp')
  .directive('weatherWidget', function () {
	  
	  // http://www.sharepointpals.com/post/How-to-create-a-weather-widget-using-Angular-Js-and-open-weather-map
	  
	  
	  
    return {
      templateUrl: '/views/widgets/weather.html',
      restrict: 'E'
    };
  });
