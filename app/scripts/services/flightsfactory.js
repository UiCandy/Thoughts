'use strict';

angular.module('thoughtworksApp')
  .factory('flightsFactory', function($q, $timeout, $http) {
    var flights = {
      fetch: function() {
          
        var deferred = $q.defer();

        $timeout(function() {
          $http.get('scripts/data/flights.json').success(function(response) {
              deferred.resolve(response);
            });
        }, 30);

        return deferred.promise;
      }
    };
    return flights;
  });