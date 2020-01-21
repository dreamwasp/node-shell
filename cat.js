const fs = require('fs');
console.log(fs);
const ls = require('./ls');

let func = () => fs.readFile(ls, (err, data) => {
  if (err) throw err;
  console.log(data);
});

func();
