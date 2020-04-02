const fs = require('fs');

// const data = fs.readFileSync('./data.txt');
const data = fs.readFileSync('./data.txt', 'utf8');

console.log(data);
// jsonmraz:webstorm-tdd-nodejs-api mraz$ node index.js
// <Buffer 54 68 69 73 20 69 73 20 64 61 74 61 20 66 69 6c 65>

// jsonmraz:webstorm-tdd-nodejs-api mraz$ node index.js
// This is data file
