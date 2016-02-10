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
	  
	  function parseIcon(icon) {
		  // Parse openweathermap API icons to iconvault styles
		  
		  $('.weatherIcon ul').empty();
		  
		  if (icon == '01d') {
			  var il1 = $('<li></li>')
			  il1.addClass('icon-sun');
			  $('.weatherIcon ul').append(il1);
		  } else if (icon == '01n') {
			  var il1 = $('<li></li>')
			  il1.addClass('icon-moon');
			  $('.weatherIcon ul').append(il1);
		  } else if (icon == '02d') {
			  var il1 = $('<li></li>')
			  il1.addClass('basecloud');
			  var il2 = $('<li></li>')
			  il2.addClass('icon-sunny');
			  $('.weatherIcon ul').append(il1).append(il2);
		  } else if (icon == '02n') {
			  var il1 = $('<li></li>')
			  il1.addClass('basecloud');
			  var il2 = $('<li></li>')
			  il1.addClass('icon-night	');
			  $('.weatherIcon ul').append(il1).append(il2);
		  } else if (icon == '03d' || icon == '03n') {
			  var il1 = $('<li></li>')
			  il1.addClass('icon-cloud');
			  $('.weatherIcon ul').append(il1);
		  } else if (icon == '04d' || icon == '04n') {
			  var il1 = $('<li></li>')
			  il1.addClass('icon-cloud');
			  $('.weatherIcon ul').append(il1);
		  } else if (icon == '50d' || icon == '50n') {
			  var il1 = $('<li></li>')
			  il1.addClass('icon-mist');
			  $('.weatherIcon ul').append(il1);
		  }
	  } 
	  
	  weatherService.getWeather().then(function(data) {
		  if (data) {
			  parseIcon(data.icon);
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
