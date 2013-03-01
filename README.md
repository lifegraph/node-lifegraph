node-lifegraph
==============

Use this node package to convert physical IDs to Facebook IDs and handle authentication for users.

Register Your App with Lifegraph Connect
-------------------------------------

You can register your Facebook applications with [Lifegraph Connect](http://lifegraphconnect.com) (http://lifegraphconnect.com).

First, you'll need to create a Facebook application. If you don't yet have one, go to the [Facebook App Dashboard](https://developers.facebook.com/apps), verify your account, add the Developer app, then click the 'Create New App' button. More information on creating an App can be found [here](https://developers.facebook.com/docs/technical-guides/opengraph/opengraph-tutorial/) on the Facebook tutorial. Open Graph applications are great for posting data from the real world, but if you just want to pull data, a regular Facebook App is fine (that is, you only need to complete step 1 of the Facebook tutorial).

Next, you'll need to add `lifegraphconnect.com` as an app domain. On the summary page, under "Select how your app integrates with Facebook", add `http://lifegraphconnect.com`. Then add `lifegraphconnect.com` to your list of App Domains (in addition to any other servers you have).

![http://i.imgur.com/sB13ixR.png](http://i.imgur.com/sB13ixR.png)

Now we'll register your app by going to [Lifegraph Connect](http://lifegraphconnect.com) (http://lifegraphconnect.com).

1. Click the link in the top right of the page, "Login to admin your apps". Next, click "See your Apps" to see your list of Facebook Apps.
2. Click the app you want to register with Lifegraph Connect.
3. After you connect through Facebook, fill out some details about your app. Most importantly, you must enter the API key and secret key copied from your [Facebook App Dashboard](https://developers.facebook.com/apps). You only need to save this information once.

Configuring your server
-----------------------

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

If a physical device has never been synced to a virtual ID before, you'll need to do it on [Lifegraph Connect](http://entrance-tutorial.herokuapp.com).
Click the button to connect to that app. Then, with your server running so that it will send physical IDs to the Lifegraph server, read your RFID device. The Lifegraph Connect webpage
should prompt the user to claim the ID. It's that simple.
