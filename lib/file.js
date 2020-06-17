const fsPromises = require('fs').promises;

const copyFile = (src, dst) => {
  const promiseToGiveFileContents = fsPromises.readFile(src, { encoding: 'utf8' });
  return promiseToGiveFileContents
    .then(contents => fsPromises.writeFile(dst, contents));    
};

module.exports = {
  copyFile,
};
