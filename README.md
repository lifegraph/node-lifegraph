node-lifegraph
==============

Use this node package to convert physical IDs to virtual IDs (for now only FB) and ease the the authentication process.

Setup
-----
First create an app on [Lifegraph connect](http://connect.lifegraphlabs.com) by clicking the link to 'Login to Admin your apps'.

After you connect through Facebook, you'll have to fill out some details about your app. 

Configuring the server
---------------------

Now just install the package.

```npm install lifegraph```

Inside your node server, configure the lifegraph module and then you can connect.

```
// Import the module
var lifegraph = require('lifegraph');

// Configure lifegraph for your app
lifegraph.configure("FB_NAMESPACE", "FB_KEY", "FB_SECRET");

// Now you can turn physical IDs into virtual ones
lifegraph.connect(physicalID, function (error, facebookUser) {

  // There was an error (like the device hasn't been synced yet)
  if (error) {

  }

  else {
  
   // Do something cool!
  }
});


Syncing
-------

If a physical device has never been synced to a virtual ID before, you'll need to do it on [Lifegraph Connect](http://connect.lifegraphlabs.com).
Click the button to connect to that app. Then, with your server running so that it will send physical IDs to the Lifegraph server, read your RFID device. The Lifegraph Connect webpage
should prompt the user to claim the ID.
