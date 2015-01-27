'use strict';

angular.module('thoughtworksApp')
  .controller('MainCtrl', function ($scope, flightsFactory, filterFlightsFilter, $mdSidenav, $timeout) {

		$scope.price = {
		  range: Math.floor(Math.random() * 255)
		};

		flightsFactory.fetch().then(function(flights) {
        $scope.flights = flights;
      });
		$scope.filteredFlights = function(flight) {
		    return flight.Departure.From.indexOf($scope.departsFrom) >= 0 ||
				   flight.Arrival.At.indexOf($scope.arrivesAt) >= 0 ||
				   flight.Departure.Date.indexOf($scope.departureDate) >= 0;
		  };
    $scope.allResults = false;    
  });
  