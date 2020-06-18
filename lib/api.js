const request = require('superagent');

const getQuote = (name) => {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${name}`)
    .then(({ body }) => ({
      character: body.character,
      quote: body.quote,
      image: body.image
    }));
};


  

module.exports = {
  getQuote,
  
};
