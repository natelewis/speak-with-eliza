'use strict';

const ElizaBot = require('eliza-as-promised');
const say = require('say');
const MicToSpeech = require('mic-to-speech');
const Speech = require('google-speech-from-buffer');

// create our instance of eliza
const eliza = new ElizaBot();

// in a standard env this will pick up and watch the microphone
const micToSpeech = new MicToSpeech();

micToSpeech.on('speech', function(buffer) {
  // pause my speech so I don't listen to what I'm saying
  micToSpeech.pause();
  // process the speech with Google API and get a reply
  new Speech().recognize(buffer)
    .then((statement) => converseWithEliza(statement));
});

let converseWithEliza = function(statement) {
  // you said this to eliza
  console.log('<< ' + statement);
  // Eliza to respond
  eliza.getResponse(statement)
    .then((response) => {
      // keep the convo going!
      if (response.reply) {
        elizaSay(response.reply, function() {
          micToSpeech.resume();
        });
      }
      // final statement received, quit response and exit
      if (response.final) {
        elizaSay(response.final, function() {
          micToSpeech.stop();
          process.exit(0);
        });
      }
    });
};

let elizaSay = function(words, callback) {
  console.log('>> ' + words);
  say.speak(words, undefined, 1.0, function(err) {
    if (err) {
      return console.error(err);
    }
    callback();
  });
};

// Have Eliza start the conversation with an initial statement
elizaSay(eliza.getInitial(), function() {
  micToSpeech.start();
});
