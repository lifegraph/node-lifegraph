var lifegraph = require('./');
var rem = require('rem');

lifegraph.configure(process.env.FB_NAMESPACE, process.env.FB_KEY, process.env.FB_SECRET)

var fb = rem.connect('facebook.com', '*').configure({
  key: process.env.FB_KEY,
  secret: process.env.FB_SECRET
});

lifegraph.connect(process.env.FB_PHYSICALID, function (err, json) {
  console.log(err, json);
  var user = rem.oauth(fb).restore(json.tokens);

  // Use the user object to call the /me Graph API endpoint:
  user('me').get(function (err, profile) {
    console.log(profile);
  });
});