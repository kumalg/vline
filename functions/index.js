const functions = require('firebase-functions');
const rp = require('request-promise');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});


exports.google = functions.https.onRequest((request, response) => {
  rp('http://www.google.com')
    .then(function(htmlString) {
      // Process html...
      response.send(htmlString);
    })
    .catch(function(err) {
      // Crawling failed...
    });
});
