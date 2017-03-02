'use strict';

const messages = { 
    "emma" : "You can beat them all, marketing hero!",
    "pau"  : "Redhead power for the win, master of marketing!",
    "jesus" : "No secrets for the bot warrior!",
    "javi" : "Move your ass, you lazy bastard",
    "myself" : "Always be yourself. Unless you can be Batman"
};

module.exports.motivator = (event, context, callback) => {
    let target = event.request.intent.slots.target.value || 'myself';
    let message = messages[target.toLowerCase()];
    message = message || messages.myself;
    let response = {
        version: '1.0',
        response: {
          outputSpeech: {
            type: 'PlainText',
            text: message,
          },
        },
        "card": {
          "type": "Standard",
          "title": "Motivating " + target,
          "text": message,
          "image": {
            "smallImageUrl": "https://s3.minijuegosgratis.com/media/video-collection-img/video-collection-trollface-thumb.jpg",
            "largeImageUrl": "https://s3.minijuegosgratis.com/media/video-collection-img/video-collection-trollface-thumb.jpg"
          }
        }
      };

    callback(null, response);

};
