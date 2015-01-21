'use strict';

angular.module('thoughtworksApp')
  .controller('MainCtrl', function ($scope, flightsFactory) {

		$scope.price = {
		  range: Math.floor(Math.random() * 255)
		};

		flightsFactory.fetch().then(function(flights) {
        $scope.flights = flights;
      });

		$scope.filteredFlights = function(){
		    var filteredFlights = [];
		    console.log($scope.flights);
		    angular.forEach($scope.flights, function(val){
		      if(val !== $scope.flights){
		        this.push(val);
		      }
		    },filteredFlights);
		    return filteredFlights;
	    };
  });

