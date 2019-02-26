const lineBot = require('linebot');
const express = require('express');
const reply = require('./msg-reply');
const scheduleObj = require("auto-send-msg");

// const config = {
//     channelId: process.env.CHANNEL_ID,
//     channelSecret: process.env.CHANNEL_SECRET,
//     channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
// };
const bot = lineBot({
    channelId: "1648099378",
    channelSecret: "2fe8f7a52d94b031b7d002688bda80db",
    channelAccessToken: "wjJikM9SGt8DmurAb14g20haoST6tMLq2Q9qJnUUZfkr/E7gKEYdAmT9rDj1efz/c6Zf8ISCNrzm+6SkQUZxNPZB4obXI60HlC8b8bVDqT1nBhpCylwfk8OpnjPf+wtbxCkVmCda8wcQBPM3BkdyIwdB04t89/1O/w1cDnyilFU="
});

scheduleObj.scheduleExec();

let infos, index = 0;

function msgSend(event) {
    event.reply(infos[index]).then(function (data) {
        // success
        console.log("=============success==============");
        console.log(event.message.text);
        console.log(event.source.userId);
        console.log(data);
        index = index + 1;
        const timer = setInterval(function(){
            bot.push(event.source.userId, infos[index]);
            index = index + 1;
            if (index >= infos.length) {
                clearTimeout(timer);
            }
        }, 2000);
    }).catch(function (error) {
        // error
        console.log("=============error==============");
        console.log(error);
    });
}
bot.on('message', function (event) {
    index = 0;
    console.log(event); //把收到訊息的 event 印出來看看
    infos = reply.msgReply(event.message.text);
    msgSend(event);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//express port:3000
const server = app.listen(process.env.PORT || 8080, function() {
    const port = server.address().port;
    console.log("App now running on port:", port);
});

