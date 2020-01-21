//output a prompt
const cwdCommand = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');
// the stdin 'data;'


process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();


  if(cmd === 'pwd') {
    cwdCommand();
  } else if (cmd === 'ls') {
    ls();
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ')

});
