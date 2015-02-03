'use strict';

angular.module('thoughtworksApp')
  .controller('MainCtrl', function ($scope, flightsFactory, filterFlightsFilter, $mdSidenav, $timeout) {

		$scope.price = {
		  range: Math.floor(Math.random() * 255)
		};

		flightsFactory.fetch().then(function(flights) {
        $scope.flights = flights;
      });

     $scope.priceRange = function(flight) {
       return (parseInt(flight['Price']) >= $scope.price.min && parseInt(flight['Price']) <= $scope.price.max);
     };

    $scope.showSlider = true; 
    // Using showSlider as a promise.. then use $timeout to inject default values.
    $timeout(function() {
      $scope.price.min = 1000;
      $scope.price.max = 4000;
    });  
  });
  