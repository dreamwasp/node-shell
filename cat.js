const fs = require('fs');

let cat = (arg) => fs.readFile(arg, 'utf8', (err, data) => {
  arg = `./${arg}`
  if (err) {
    throw err;
  } else {
    process.stdout.write(data);
  }
  process.stdout.write('\nprompt > ')
});

module.exports = cat;
