var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static('public'));

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}
app.use(logErrors);

// Express get method requests, finds, and sends Campaign data
app.get('/data', function(req, res) {
  // find 8 campaigns, exec runs the query and returns the data or an error
  Campaign.find({}).limit(8).exec(function(error, data) {
    res.send(data);
  });
});

// hosted on Heroku and localhost: 3000
app.listen(port);

/* Mongo Campaign Database */
var mongoose = require('mongoose');
var db = mongoose.connection;

// initialize direct connection to Mongo Database
// mongoose.connect('mongodb://localhost/campaigns', function(err) {
//   if(err) throw err;
// });

// log successful connections
db.once('open', function () {
    console.log('Connected to the LegacyCrowd Campaign database.');
});

 // Create Schema to format the "campaigns" collection
var campaignSchema = new mongoose.Schema(
  {
    "Name" : String,
    "Description" : String,
    "Pitch" : String,
    "Target" : String,
    "Location" : String,
    "Industry" : String,
    "Start" : String,
    "End" : String,
    "Image" : String,
    "Logo" : String
  }, 
  {
    versionKey: false
  });

// Compile model that constructs resort documents to use resortSchema to store attributes with Resort function constructor
var Campaign = mongoose.model('campaign', campaignSchema);

// Campaigns locally stored in MongoDB (run once to upload data to the server, then comment out - otherwise the db will continuously try to update)
/*
var emberlight = new Campaign({
    "Name" : "Emberlight",
    "Description" : "Simply screw in any bulb into the Emberlight, then connect to any bulb-hosting socket. The Emberlight connects to your home's wifi, and then download the Emberlight Application and take control of each lightbulb. Turn lights on/off or see if the lights are left on from anywhere in the world. Set the mood by dimming a group of sockets with a single touch.",
    "Pitch" : "Connect lightbulbs to your wifi, then use an app to control each lightbulb.",
    "Target" : "35,000",
    "Location" : "San Francisco, CA",
    "Industry" : "Gadgets",
    "Start" : "February 15, 2016",
    "End" : "April 15, 2016",
    "Image" : "campaign-images/emberlight.jpg",
    "Logo" : "campaign-logos/emberlight-logo.png"
});

var duracloud = new Campaign({
    "Name" : "DuraCloud, LLC",
    "Description" : "DuraCloud makes it easy to store and do more in the cloud. Our service makes the preservation of your content simple and cost effective. DuraCloud is the only service that makes it easy to move copies of your content into the cloud and store them with several different providers, all with just one click. We eliminate the risk of storing content with a single cloud provider by making it easy to move and copy files of any size or format.",
    "Pitch" : "Simple Storage Solution for Data in the Cloud.",
    "Target" : "84,000",
    "Location" : "Phoenix, AZ",
    "Industry" : "Technology",
    "Start" : "March 1, 2016",
    "End" : "May 1, 2016",
    "Image" : "campaign-images/duracloud.jpg",
    "Logo" : "campaign-logos/duracloud-logo.png"
});

var rayton = new Campaign({
    "Name" : "Rayton Solar",
    "Description" : "Rayton Solar has developed a solar panel manufacturing technology that produces solar energy cheaper than fossil fuels. Once our manufacturing technique is scaled it will allow solar photovoltaic electricity to become the main source of energy. We are the first company in the world to successfully implant and exfoliate Float Zone silicon. This has unlocked the low oxygen content, high efficiency material for use in solar panels.",
    "Pitch" : "Solar panel energy cheaper than fossil fuels.",
    "Target" : "200,000",
    "Location" : "Santa Monica, CA",
    "Industry" : "Technology",
    "Start" : "April 20, 2016",
    "End" : "July 20, 2016",
    "Image" : "campaign-images/rayton-solar.jpg",
    "Logo" : "campaign-logos/rayton-solar-logo.png"
});

var piper = new Campaign({
    "Name" : "Piper",
    "Description" : "Piper is a computer kit to learn engineering through Minecraft. Play an awesome series of adventure maps in Minecraft, including building a controller to navigate your robot in the game, assembling your own electronics to solve in game puzzles and challenges, adding switches to uncover secrets, making LED light proximity sensors to find treasure, and much more. Piper is designed for the young and the young at heart.",
    "Pitch" : "Play Minecraft and learn to Build Computers at the same time.",
    "Target" : "25,000",
    "Location" : "Reno, NV",
    "Industry" : "Technology",
    "Start" : "September 25, 2016",
    "End" : "November 25, 2016",
    "Image" : "campaign-images/piper.jpg",
    "Logo" : "campaign-logos/piper-logo.png"
});

var unyq = new Campaign({
    "Name" : "UNYQ",
    "Description" : "UNYQ gives amputees stylish and functional options for showing off and concealing their amputation as they see fit. Our prosthetic covers are manufactured with the latest 3D printing technologies and are completely personalized to your measurements. Each UNYQ cover is unique, meaning we produce it individually so it’s symmetrical with your sound leg and fits over your componentry. You can choose from the designs we have on our website or ask us to design a custom one that fit your own style.",
    "Pitch" : "Custom, stylish and functional prosthetic covers.",
    "Target" : "12,000",
    "Location" : "New York, NY",
    "Industry" : "Product",
    "Start" : "July 24, 2016",
    "End" : "September 24, 2016",
    "Image" : "campaign-images/unyq.jpg",
    "Logo" : "campaign-logos/unyq-logo.png"
});

var instamic = new Campaign({
    "Name" : "Insta-mic",
    "Description" : "Instamic is the smartest and smallest microphone on the market. Whether you are a videographer, musician, or student attending class, Instamic was made for you. Record with professional-grade quality, attach to any surface, and easy to operate. Instamic is compact in size, completely waterproof, wireless, and vertically un noticeable when mounted. It also works with or without a mobile app and can be USB rechargeable.",
    "Pitch" : "The Smartest and Smallest Micro-phone",
    "Target" : "75,000",
    "Location" : "Denver, CO",
    "Industry" : "Gadget",
    "Start" : "October 5, 2016",
    "End" : "December 5, 2016",
    "Image" : "campaign-images/instamic.jpg",
    "Logo" : "campaign-logos/instamic-logo.png"
});

var saent = new Campaign({
    "Name" : "Saent",
    "Description" : "Saent stops distractions. When you hit the button to launch a focused work session, the Saent app locks you into apps and websites that are productive for your work (based on a predefined list), while blocking out distractions (like social networking sites or app notifications). Whenever you try to switch to an unproductive application, a friendly reminder will pop-up instead, recommending you to stay focused on your current task. Over time, Saent will learn your work patterns automatically and associate productive apps with specific tasks. Your Saent score provides a window into your productivity over time and you can compete with colleagues and friends. It’s easy to forget about an app on your cluttered desktop or home screen, but the Saent button is a beautiful, physical reminder to stay focused. It’s a visual cue that helps you develop a new behavior, stick to it, and monitor your progress.",
    "Pitch" : "Remove distractions, stay on task, optimize productivity.",
    "Target" : "100,000",
    "Location" : "New York, NY",
    "Industry" : "Product",
    "Start" : "July 24, 2016",
    "End" : "September 24, 2016",
    "Image" : "campaign-images/saent.jpg",
    "Logo" : "campaign-logos/campaign-logos/saent-logo.png"
});

var metronome = new Campaign({
    "Name" : "Metronome",
    "Description" : "This campaign will build a new fast and affordable smartphone. Metronome is a looking for investment to develop an exciting new phone that will be available in 50 different countries, including US, Canada, and Asia. This new phone will be shock-resistant, water-resistant, and made of cutting-edge durable materials for a fraction of the cost.",
    "Pitch" : "A new fast and affordable smartphone.",
    "Target" : "150,000",
    "Location" : "Irvine, California",
    "Industry" : "Technology",
    "Start" : "January 1, 2017",
    "End" : "December 31, 2017",
    "Image" : "campaign-images/metronome.png",
    "Logo" : "campaign-logos/metronome-logo.jpg"
});

// Save the model 
emberlight.save();
duracloud.save();
rayton.save();
piper.save();
unyq.save();
instamic.save();
saent.save();
metronome.save();
*/
/*
To make changes to these campaigns, open mongoD run db.campaigns.drop() to remove data in the campaigns collection, 
then uncomment the above, make changes to campaigns / add more campaigns. 
Save new collection: 3 terminals needed-> mongod, mongo, and gulp 
*/