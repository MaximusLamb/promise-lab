const { getCharacter, getManyCharacters } = require('./rickandmortyapi.js');


describe('rick and morty api functions', () => {
  it('can rick and morty charactere', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
        });
      });
  });

  it('can rick and morty charactere', () => {
    return getManyCharacters([1, 2, 3])
      .then(characters => {
        expect(characters).toEqual(
          [{ 'name': 'Rick Sanchez', 'species': 'Human', 'status': 'Alive' }, 
            { 'name': 'Morty Smith', 'species': 'Human', 'status': 'Alive' },
            { 'name': 'Summer Smith', 'species': 'Human', 'status': 'Alive' }]
        );
      });
  });
});
