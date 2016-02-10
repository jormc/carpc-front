'use strict';

/**
 * @ngdoc directive
 * @name carpcFrontApp.directive:clockWidget
 * @description
 * # clockWidget
 */
angular.module('carpcFrontApp')
  .directive('clockWidget', ['$rootScope', '$timeout', '$locale', function ($rootScope, $timeout, $locale) {
	
	  // Dateformat > https://docs.angularjs.org/api/ng/filter/date
	  
	  $rootScope.clock = "loading clock...";
	  $rootScope.tickInterval = 1000;
	
	  var tick = function() {
		  $rootScope.clock = Date.now();
		  $timeout(tick, $rootScope.tickInterval);
	  }
	
	  // Start the timer
	  $timeout(tick, $rootScope.tickInterval);
	  
	  return {
		  templateUrl: '/views/widgets/clock.html',
		  restrict: 'E'
	  };
  }]);
