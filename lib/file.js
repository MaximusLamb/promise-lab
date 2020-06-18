const fsPromises = require('fs').promises;

const copyFile = (src, dst) => {
  const promiseToGiveFileContents = fsPromises.readFile(src, { encoding: 'utf8' });
  return promiseToGiveFileContents
    .then(contents => fsPromises.writeFile(dst, contents));    
};

const transformFile = (src) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(response => {
      return response
        .split('')
        .filter(letter => letter === letter.toLowerCase())
        .reverse()
        .join('')   
        .toUpperCase();
    }); 
};

module.exports = {
  copyFile,
  transformFile
};
