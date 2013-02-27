node-lifegraph
==============

Use this node package to convert physical IDs to Facebook IDs and handle authentication for users.

Setup
-----

First create an app on [Lifegraph Connect](http://connect.lifegraphlabs.com) (http://connect.lifegraphlabs.com) by clicking the link in the top left to 'Login to admin your apps'.

Click Admin to see the list of Facebook Apps that you have made. 

Don't have a Facebook app ready? Make one by going to the [Facebook App Dashboard](https://developers.facebook.com/apps), verify your account and add the Developer app, then click the 'Create New App' button.
More information on creating an App can be found [here](https://developers.facebook.com/docs/technical-guides/opengraph/opengraph-tutorial/) on the Facebook tutorial. Open Graph applications are great for posting data from the real world, but if you just want to pull data, a regular Facebook App is fine (after step 1 in the Facebook tutorial).

After you connect through Facebook, you'll have to fill out some details about your app, most importantly the api key and secret key copied from your [Facebook App Dashboard](https://developers.facebook.com/apps) for the app.

Configuring the server
---------------------

Now just install the package.

```npm install lifegraph```

Inside your node server, configure the lifegraph module and then you can connect.

```
// Import the module
var lifegraph = require('lifegraph');

// Configure lifegraph for your app
// get these from https://developers.facebook.com/apps for your app
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
```

Syncing
-------

If a physical device has never been synced to a virtual ID before, you'll need to do it on [Lifegraph Connect](http://connect.lifegraphlabs.com).
Click the button to connect to that app. Then, with your server running so that it will send physical IDs to the Lifegraph server, read your RFID device. The Lifegraph Connect webpage
should prompt the user to claim the ID. It's that simple.
