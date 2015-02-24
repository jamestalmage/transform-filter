var multimatch = require('multimatch');
var through = require('through');
var path = require('path') ;


module.exports = transformFilter;

function transformFilter (includPattern, excludePattern, transform){
  if(typeof excludePattern === 'function'){
    transform = excludePattern;
    excludePattern = null;
  }

  function include(path){
    return includPattern ? !!multimatch(path, includPattern).length : true;
  }

  function exclude(path){
    return excludePattern ? !!multimatch(path, excludePattern).length : false;
  }

  function test(file){
    var p = path.relative(process.cwd(), file);
    return !exclude(p) && include(p);
  }

  return function(file, opts){
    var pass = test(file);
    return pass ? transform(file, opts) : through();
  };
}
