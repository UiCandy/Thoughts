'use strict';

angular.module('thoughtworksApp')
  .filter('flightsFilter', function () {
    return function (input) {
      return 'flightsFilter filter: ' + input;
    };
  });
