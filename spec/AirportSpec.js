'use strict';

describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('has no planes in the hanger by default', function(){
    expect(airport.hanger()).toEqual([]);
  });
});