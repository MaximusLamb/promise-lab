const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body }) => ({
      name: body.name,
      status: body.status,
      species: body.species
    }));
};


const getManyCharacters = (nameArray) => {
  return Promise.all(
    nameArray
      .map(item => getCharacter(item))
  );
};

module.exports = {
  getCharacter,
  getManyCharacters
};
