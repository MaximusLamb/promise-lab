const { copyFile, transformFile } = require('./file');
const fsPromises = require('fs').promises;

describe('file functions', () => {
  
  it('copy a file', () => {
    return copyFile('./index.js', './place.txt')
      .then(() => {
        return fsPromises.readFile('./place.txt', { encoding: 'utf8' });
      })
      .then(contents => {
        expect (contents).toEqual('I Am Garbage At Functions');
      });
  });

  it('transforms a file ', () => {
    return fsPromises.writeFile('./place2.txt', 'Nice and Short')
      .then(() => {
        return transformFile('./place2.txt');
      })
      .then(contents => {
        expect (contents).toEqual('TROH DNA ECI');
      });
  });
});
