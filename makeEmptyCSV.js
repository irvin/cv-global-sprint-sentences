const LINES_IN_CROWDIN = 20000;
const fs = require('fs');

const OUTPUT_PATH = './corpus.csv';

let output = '';
for (var i = 1; i <= LINES_IN_CROWDIN; i++) {
  output += `"${i}","sentence #${i}"\n`;
}

fs.writeFile(OUTPUT_PATH, output, (err) => {
  if (err) {
    console.error('error', err);
  }
});
