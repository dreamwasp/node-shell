//output a prompt
const cwdCommand = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')


process.stdout.write('prompt > ');
// the stdin 'data;'



process.stdin.on('data', (data) => {
  let cmdStringToArr = data.toString().trim()
  cmdStringToArr = cmdStringToArr.split(' ')
  const cmd = cmdStringToArr[0];
  const file = cmdStringToArr[1];
  if(cmd === 'pwd') {
    cwdCommand();
  } else if (cmd === 'ls') {
    ls(address);
  } else if (cmd === 'cat') {
    cat(file);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ')

});
