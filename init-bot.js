const lineBot = require('linebot');
const express = require('express');
const reply = require('./msg-reply');

function initBot(config) {
    const bot = lineBot({
        channelId: config.CHANNEL_ID,
        channelSecret: "2fe8f7a52d94b031b7d002688bda80db",
        channelAccessToken: "wjJikM9SGt8DmurAb14g20haoST6tMLq2Q9qJnUUZfkr/E7gKEYdAmT9rDj1efz/c6Zf8ISCNrzm+6SkQUZxNPZB4obXI60HlC8b8bVDqT1nBhpCylwfk8OpnjPf+wtbxCkVmCda8wcQBPM3BkdyIwdB04t89/1O/w1cDnyilFU="
    });

    bot.on('message', funcReply(event));

    const app = express();
    const linebotParser = bot.parser();
    app.post('/', linebotParser);

    //express port:3000
    var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log("App now running on port:", port);
    });
}

function funcReply(event) {
    console.log(event); //把收到訊息的 event 印出來看看
    console.log(event.message); //把收到訊息的 event 印出來看看
    console.log(reply.msgReply);
    event.reply(event.message.text).then(function (data) {
        // success
        console.log("=============success==============");
        console.log(event.message.text);
        console.log(data);
    }).catch(function (error) {
        // error
        console.log("=============error==============");
        console.log(error);
    });
}

module.exports = {
    initBot
}