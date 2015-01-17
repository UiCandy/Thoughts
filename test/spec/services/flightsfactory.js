'use strict';

describe('Service: flightsFactory', function () {

  // load the service's module
  beforeEach(module('thoughtworksApp'));

  // instantiate service
  var flightsFactory;
  beforeEach(inject(function (_flightsFactory_) {
    flightsFactory = _flightsFactory_;
  }));

  it('should do something', function () {
    expect(!!flightsFactory).toBe(true);
  });

});
