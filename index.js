var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1648099378",
  channelSecret: "47842a3e38d739c782e704d887261571",
  channelAccessToken: "e+OlsdO4+2hmZXoWTevXxGsXWtBBX7YvJokoFD3agAshhC3zd/2g8OjsI4Tas6YuExx9nmvFv5WnvVbE15n38kNKkVJIRi+bhJsJSfeP1JK8VZeP+1mFbB3XFWg1teBfggG5EYd8rv0LtF+OQX4BfwdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
  event.reply(event.message.text).then(function (data) {
    // success
  }).catch(function (error) {
    // error
  });
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//express port:3000
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port:", port);
});
