var request = require('request-promise');
var Q = require('q');
var cache = { google: { statusCode: 200 } };
var promise;

if (!cache.google) {
  promise = request({ uri: 'http://www.google.com', resolveWithFullResponse: true});
} else {
  promise = Q(cache.google);
}

promise.then(function(google) {
  console.log(google.statusCode);
});
