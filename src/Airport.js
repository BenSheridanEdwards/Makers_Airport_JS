'use strict';

function Airport(){
  this._hanger = [];
}

Airport.prototype.planes = function() { 
  return this._hanger; 
};

Airport.prototype.clearForLanding = function(plane){
  if(this.isStormy()) {
    throw new Error('cannot land during a storm');
  }
  this._hanger.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if(this.isStormy()) {
    throw new Error('cannot takeoff during a storm');
  }
  this._hanger = [];
  // this._hanger.pop(plane);
};

Airport.prototype.isStormy = function() {
  return false; 
};