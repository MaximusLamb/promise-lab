const { copyFile } = require('./file');
const fsPromises = require('fs').promises;

describe('file functions', () => {
  
  it('copy a file', () => {
    return copyFile('./index.js', './place.txt')
      .then(() => {
        return fsPromises.readFile('./place.txt', { encoding: 'utf8' });
      })
      .then(contents => {
        expect (contents).toEqual('I AM GARBAGE AT FUNCTIONS');
      });
  });
});
