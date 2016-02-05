'use strict';

/**
 * @ngdoc directive
 * @name carpcFrontApp.directive:weatherWidget
 * @description
 * # weatherWidget
 */
angular.module('carpcFrontApp')
  .directive('weatherWidget', ['$rootScope', 'weatherService', function($rootScope, weatherService) {
	  
	  // http://www.sharepointpals.com/post/How-to-create-a-weather-widget-using-Angular-Js-and-open-weather-map
	  
	  weatherService.getWeather().then(function(data) {
		  if (data) {
			  $rootScope.weather = data; 
		  } else {
			  console.log('Error retrieving weather data!')
		  }
	  });
	  
	  return {
		  templateUrl: '/views/widgets/weather.html',
		  restrict: 'E'
	  };
	  
  }]);
