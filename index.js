const config = require('./ChannelConfig');
const linebot = require('linebot');
const express = require('express');
const reply = require('./msgReply');

var bot = linebot({
  channelId: "1648099378",
  channelSecret: "4b18885a067aaa5c27123e6ec66f3a42",
  channelAccessToken: "klUTk/W5MuwoP1OG4njZM1zlaOdjW0CLYrmXCQiosr3+IVj2jxvxGanLVv/7lhxvLHSKNAChYYQjUp3kLhXeFuSTmgrdR7jq1ORWIHFKOK8rbAx7rG0lNCAluxle0UojeSdZwrbRi4H9jXEXL0BkVwdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
  console.log(event.message); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//express port:3000
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port:", port);
});
