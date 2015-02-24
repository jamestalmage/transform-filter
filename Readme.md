transform-filter
================

  Filter [browserify](https://github.com/substack/node-browserify) transforms using glob patterns.

install
-------

```
npm install transform-filter
```

usage
-----

  suspend your disbelief for a second and pretend that [coffeeify](https://github.com/substack/coffeeify) didn't filter the files itself:

```javascript
var filterCoffee = filterTransform(
  ['**/*.coffee'],  // include - only run transform on matching files
  ['subdir/**'],    // exclude - (because you don't want coffee files in `subdir` processed for some reason).
  coffeeify
)
```

  * The second argument is optional, so you can just do:

     `filterTransform('**/*.coffee', coffeeify)`.
  * Patterns can be a string, array of strings, null or undefined.
  * Exclude takes precedent over include.


If you need more control than glob patterns offer, check out [filter-transform](https://www.npmjs.com/package/filter-transform).

It offers similar filtering via a user supplied callback, and sparked the idea behind this module.


licence
-------

  MIT. &copy; James Talmage