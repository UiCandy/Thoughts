'use strict';

angular.module('thoughtworksApp')
  .controller('MainCtrl', function ($scope, flightsFactory) {

		$scope.price = {
		  range: Math.floor(Math.random() * 255)
		};

		flightsFactory.fetch().then(function(flights) {
        $scope.flights = flights;
      });
  });