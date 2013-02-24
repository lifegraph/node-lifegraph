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

function connect (pid, next) {
  console.error("Requesting auth tokens for " + pid + " from Lifegraph Connect...");

  if (!namespace || !key || !secret) {
    console.log("Attempting to connect to lifegraph without properly configuring namespace, key, or secret.");

    next(new Error("Need to configure lifegraph before connecting."), null);
  }

  rem.json('http://connect.lifegraphlabs.com/api/tokens/', pid).get({
    namespace: namespace,
    key: key,
    secret: secret
  }, function (err, json, res) {
    console.log("Response received from Lifegraph Connect.");
    console.log("Status Code: " + res.statusCode);
    next(err, json);
  })
}

exports.configure = configure;
exports.connect = connect;