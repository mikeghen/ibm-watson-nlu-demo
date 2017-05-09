var dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.load();


var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  "username": process.env.IBM_WATSON_NLU_USERNAME,
  "password": process.env.IBM_WATSON_NLU_PASSWORD,
  'version_date': '2017-02-27'
});

var understandText = function(text, callback) {

  var parameters = {
    'text': text,
    'features': {
      'keywords': {
        'sentiment': true,
        'emotion': true,
        'limit': 250
      },
      'entities': {
        'sentiment': true,
        'emotion': true,
        'limit': 250
      }
    }
  };

  natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
      console.log('error:', err);
    else {
      // Watson successfully processed the text
      callback(response)
    }
  });
}

exports.understandText = understandText;
