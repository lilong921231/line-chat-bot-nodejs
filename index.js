var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1648295438",
  channelSecret: "951b7c6d4778bdb1b101b4b33d207318",
  channelAccessToken: "UkikIwFZvMOErpl3tFXesFu/fAQ54V/ubCNPzdpTbQxWxxA7ipjAbbW3JxmHf47cc6Zf8ISCNrzm+6SkQUZxNPZB4obXI60HlC8b8bVDqT3p6b6AQJxOB6fDGwHnZybX4qO0dydDCaq2bIRvkIzkYQdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log("=============event==============");
  console.log(event); //把收到訊息的 event 印出來看看
  console.log(event.message); //把收到訊息的 event 印出來看看
  event.reply(event.message.text).then(function (data) {
    // success
// 	console.log("=============success==============");
// 	console.log(event.message.text);
// 	console.log(data);
  }).catch(function (error) {
    // error
// 	console.log("=============error==============");
// 	console.log(error);
  });
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//express port:3000
var server = app.listen(process.env.PORT || 8080, function() {
	console.log("=============process==============");
	console.log(process.env.PORT);
  var port = server.address().port;
  console.log("App now running on port:", port);
});
