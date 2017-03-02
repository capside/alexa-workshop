'use strict';

module.exports.mobility = (event, context, callback) => {
    let message = 'Next train for Martorell leaving in 20 minutes.';
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
          "title": "Mobility",
          "text": message,
          "image": {
            "smallImageUrl": "http://www.trainweb.org/oldtimetrains/photos/cnr_steam2/5132_silk.jpg",
            "largeImageUrl": "http://www.trainweb.org/oldtimetrains/photos/cnr_steam2/5132_silk.jpg"
          }
        }
      };

    callback(null, response);
};
