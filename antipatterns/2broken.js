var request = require('request-promise');

var doRequests = function() {
  var promise = request({ uri: 'http://www.google.com', resolveWithFullResponse: true});
  promise.then(function() {
    //do something complicated that can throw an exception
    throw new Error("Blad");
  });
  return promise;
};

doRequests().then(function() {
  console.log('OK');
})
.catch(function(err) {
  console.log("ERROR!!!11");
  console.log(err);
});
