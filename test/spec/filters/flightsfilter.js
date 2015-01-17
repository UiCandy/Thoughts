'use strict';

describe('Filter: flightsFilter', function () {

  // load the filter's module
  beforeEach(module('thoughtworksApp'));

  // initialize a new instance of the filter before each test
  var flightsFilter;
  beforeEach(inject(function ($filter) {
    flightsFilter = $filter('flightsFilter');
  }));

  it('should return the input prefixed with "flightsFilter filter:"', function () {
    var text = 'angularjs';
    expect(flightsFilter(text)).toBe('flightsFilter filter: ' + text);
  });

});
