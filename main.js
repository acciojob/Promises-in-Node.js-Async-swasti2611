const fs = require('fs');

const filePath = process.argv[2];

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading file ${filePath}: ${err}`);
        return;
      }
      resolve(data);
    });
  });
}

function modifyText(text) {
  return new Promise((resolve, reject) => {
    // TODO: Convert text to uppercase and reverse it
    try {
      let upperCaseText = text.toUpperCase();
      let reversedText = upperCaseText.split('').reverse().join('');
      resolve(reversedText);
    } catch (err) {
      reject(`Error modifying text: ${err}`);
    }

    
  });
}

readFileAsync(filePath)
  .then((data) => modifyText(data))
  .then((modifiedText) => {
    console.log(modifiedText);
  })
  .catch((error) => {
    console.error(error);
  });
