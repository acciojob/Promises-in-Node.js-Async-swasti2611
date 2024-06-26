const fs = require('fs');
const path=require('path')
const filePath = process.argv[2];
 
function readFileAsync(filePath) {

  if (!filePath) {
    console.error('Error: Please provide the file path as an argument');
    return;
}
  const absolutePath = path.resolve(filePath);
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
    
    if (!text || typeof text !== "string") {
      reject("Invalid text");
      return;
    }
      let upperCaseText = text.toUpperCase();
      let reversedText = upperCaseText.split('').reverse().join('');
      resolve(reversedText);
    
    
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
