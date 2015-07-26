var request = require('request-promise');

request({ uri: 'http://www.google.com', resolveWithFullResponse: true})
.then(function(google) {
  request({ uri: 'http://www.onet.pl', resolveWithFullResponse: true})
  .then(function(onet) {
    console.log(google.statusCode, onet.statusCode);
  });
});