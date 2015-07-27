var request = require('request-promise');

var something = function() {
  throw new Error("Can't do anything:(");
};

request({ uri: 'http://www.google.com', resolveWithFullResponse: true})
.then(function(google) {
  something();
}, function(error) {
  console.log(error);
});
