'use strict';
var includeExclude = require('include-exclude');
var through = require('through');


module.exports = transformFilter;

function transformFilter (transform, opts){

  // support original api.
  if (typeof transform !== 'function') {
    var includePattern, excludePattern;
    includePattern = transform;
    excludePattern = opts;
    transform = arguments[2];
    if (typeof excludePattern === 'function') {
      transform = excludePattern;
      excludePattern = null;
    }
    opts = {include:includePattern, exclude:excludePattern};
  }

  var test = includeExclude(opts);

  return function (file, opts) {
    var pass = test(file);
    return pass ? transform.call(this,file, opts) : through();
  };
}
