'use strict';

/**
 * @ngdoc service
 * @name carpcFrontApp.weatherService
 * @description
 * # weatherService
 * Service in the carpcFrontApp.
 */
angular.module('carpcFrontApp')
  .service('weatherService', ['$http', '$q', '$locale', function($http, $q, $locale) {

	  function getWeather() {
		  var deferred = $q.defer();
		  var lang = $locale.id.substring(0,2);
		  var weatherServiceUrl = "http://api.openweathermap.org/data/2.5/weather";
		  var options = {
			  params : {
				  'appid'		: 	'44db6a862fba0b067b1930da0d769e98',
				  'q'			: 	'Barcelona,es',
				  'units'		: 	'metric',
				  'callback'	:	'JSON_CALLBACK',
				  'lang'		:	lang
			  }
		  };
		  
		  $http.jsonp(weatherServiceUrl, options)
			  .success(function(data) {
				  deferred.resolve(processWeatherData(data));
			  })
			  .error(function(err) {
	              deferred.reject(err);
	          });
          
		  return deferred.promise;
	  }
          
	  function processWeatherData(data) {
		  var weather = {};
		  
		  // TODO Pasar a beans
		  
		  if (data) {
			  
			   if (data.coords) {
				  weather.coord.lon = data.coord.lon; // City geo location, longitude
				  weather.coord.lat = data.coord.lat; // City geo location, latitude
			  }
			  
			  if (data.weather && data.weather[0]) {
				  weather.id = data.weather[0].id; // Weather condition id
				  weather.description = data.weather[0].description; // Weather condition within the group
				  weather.icon = data.weather[0].icon; // Weather icon id
			  }
			  
			  weather.base = data.weather.base;	// Internal parameter
			  
			  if (data.main) {
				  weather.temp = data.main.temp; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
				  weather.pressure = data.main.pressure; // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
				  weather.humidity = data.main.humidity; // Humidity, %
				  weather.tempMin = data.main.temp_min;	// Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
				  weather.tempMax = data.main.temp_max; // Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
				  weather.seaPressure = data.main.sea_level; // Atmospheric pressure on the sea level, hPa
				  weather.gndPressure = data.main.grnd_level; // Atmospheric pressure on the ground level, hPa
			  }
			  
			  if (data.wind) {
				  weather.windSpeed = data.wind.speed; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
				  weather.windDeg = data.wind.deg; // Wind direction, degrees (meteorological)
			  }
			  
			  if (data.clouds) {
				  weather.clouds = data.clouds.all; // Cloudiness, %
			  }
			  
			  /*
			  if (data.rain) {
				  weather.rain = data.rain.3h; // Rain volume for the last 3 hours
			  }
			  
			  if (data.snow) {
				  weather.snow = data.snow.3h; // Rain volume for the last 3 hours
			  }
			  */
			  
			  weather.dtUTC = data.dt; // Time of data calculation, unix, UTC
			  
			  if (data.sys) {
				  weather.sysType = data.sys.type; // Internal parameter
				  weather.sysId = data.sys.id; // Internal parameter
				  weather.sysMsg = data.sys.message; // Internal parameter
				  weather.country = data.sys.country; // Country code (GB, JP etc.)
				  weather.sunrise = data.sys.sunrise; // Sunrise time, unix, UTC
				  weather.sunset = data.sys.sunset; // Sunset time, unix, UTC
			  }
			  
			  weather.cityId = data.id; // City ID 
			  weather.cityName = data.name; // City name
			  weather.cod = data.cod; // Internal parameter
			  
			  return weather;
		  }
	  }
	  
	  return {
		  getWeather: getWeather
	  };
	  
  }]);
