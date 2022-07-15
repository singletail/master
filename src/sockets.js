const fs = require('fs');

const header = fs.readFileSync('/var/dev/master/views/ascii.txt', 'utf8');

function socketReceive(ws, msg) {
  console.log(`Msg: %s`, msg);
  var replyMsg = '';
  if (msg == 'HELP') {
    replyMsg = 'Sorry, no commands yet. Come back soon.';
  } else if (msg == 'HI') {
    replyMsg = header;
  }
  ws.send(replyMsg);
  //ws.send("Welcome to Scott's Place.");
  //ws.send('Type HELP for commands.');
}

function sGreet(ws) {
  console.log(`Msg: %s`, msg);
  ws.send('Welcome');
  //ws.send("Welcome to Scott's Place.");
  //ws.send('Type HELP for commands.');
}

module.exports = { socketReceive, sGreet };
