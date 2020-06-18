const request = require('superagent');

const getQuote = () => {
  return request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(({ body }) => ({
      character: body.character,
      quote: body.quote,
      image: body.image
    }));
};

module.exports = {
  getQuote
};
