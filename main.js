const fs = require('fs');

const filePath = process.argv[2];
if (!filePath || filePath !== 'test.text') {
  throw new Error('Provided file path does not exist or is incorrect');
}

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading file ${filePath}: ${err}`);
      } else {
        resolve(data);
      }
    });
  });
}

function modifyText(text) {
  return new Promise((resolve, reject) => {
    if (!text || typeof text !== 'string') {
      reject('Invalid text');
    } else {
      let upperCaseText = text.toUpperCase();
      let reversedText = upperCaseText.split('').reverse().join('');
      resolve(reversedText);
    }
  });
}

readFileAsync(filePath)
  .then(data => modifyText(data))
  .then(modifiedText => {
    console.log(modifiedText);
  })
  .catch(error => {
    console.error(error);
  });
