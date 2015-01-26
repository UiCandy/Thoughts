'use strict';

angular.module('thoughtworksApp')
  .controller('MainCtrl', function ($scope, flightsFactory, filterFlightsFilter) {

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
    $scope.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];

  })
  .directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
            iElement.autocomplete({
                source: function(request, response) {
                    var res = new Array()
                    for (var i=0; i<scope[iAttrs.uiItems].length; i++) {
                        if (scope[iAttrs.uiItems][i].indexOf(request.term) == 0) {
                               res.push(scope[iAttrs.uiItems][i]);
                        }
                    }
                    response(res);
                },
                select: function() {
                    $timeout(function() {
                      iElement.trigger('input');
                    }, 0);
                }
            });
      };
  });
  // .directive('autoComplete', function($timeout) {
  //   return function(scope, iElement, iAttrs) {
  //           iElement.autocomplete({
  //               source: scope[iAttrs.uiItems],
  //               select: function() {
  //                   $timeout(function() {
  //                     iElement.children().hide();
  //                   }, 0);
  //                 }
  //             });
  //         };
  // });


