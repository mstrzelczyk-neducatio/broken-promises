var request = require('request-promise');
var Promise = require('bluebird');

var getResponseCode = function(response) {
  return response.statusCode;
};

var getSiteStatusCode = function(url) {
  var status = Promise.defer();
  request({ uri: url, resolveWithFullResponse: true})
  .then(function(res) {
    code = getResponseCode(res);
    status.resolve(code);
  }, function(error) {
    status.reject(error);
  });

  return status.promise;
}

getSiteStatusCode('http://www.google.com')
.then(function(code) {
  console.log(code);
})
.catch(function(error) {
  console.log(error);
});
