var rem = require('rem');

/*
 * Authenticates with out backend. Retrieves the facebookid
 * of the user with that rfid uid. 
 * Callback: function that accepts an error and a facebookID
 */

var namespace, key, secret;

function configure (_namespace, _key, _secret) {
  namespace = _namespace;
  key = _key;
  secret = _secret;
}

function requestAccess (pid, next) {
  console.error("Requesting auth tokens for " + pid + " from Lifegraph Connect...");

  rem.json('http://connect.lifegraphlabs.com/api/tokens/', pid).get({
    namespace: 'entrance-tutorial',
    key: "481848201872129",
    secret: "f2696ba2416ae6a4cc9cbde1dddd6a5b"
  }, function (err, json, res) {
    console.log("Response received from Lifegraph Connect.");
    console.log("Status Code: " + res.statusCode);
    next(err, json);
  })
}

exports.configure = configure;
exports.requestAccess = requestAccess;