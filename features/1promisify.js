var request = require('request-promise');
var fs = require("fs");

fs.readFile("./features/file.txt", "utf-8", function(error, contents) {
  if (error) {
    //handle error
    console.log(error);
  } else {
    console.log("callback: " + contents);
  }
});
