const lineBot = require('linebot');
const express = require('express');
const reply = require('./msg-reply');

const bot = lineBot({
    channelId: "1648099378",
    channelSecret: "2fe8f7a52d94b031b7d002688bda80db",
    channelAccessToken: "wjJikM9SGt8DmurAb14g20haoST6tMLq2Q9qJnUUZfkr/E7gKEYdAmT9rDj1efz/c6Zf8ISCNrzm+6SkQUZxNPZB4obXI60HlC8b8bVDqT1nBhpCylwfk8OpnjPf+wtbxCkVmCda8wcQBPM3BkdyIwdB04t89/1O/w1cDnyilFU="
});


var msgs, index = 0;

function msgSend(event) {
    // if (index < msgs.length) {
    //     event.reply(msgs[index]).then(function (data) {
    //         // success
    //         console.log("=============success==============");
    //         console.log(event.message.text);
    //         console.log(data);
    //         index = index + 1;
    //         // msgSend();
    //     }).catch(function (error) {
    //         // error
    //         console.log("=============error==============");
    //         console.log(error);
    //     });
    // }

    // event.reply(msgs).then(function (data) {
    //     // success
    //     console.log("=============success==============");
    //     console.log(event.message.text);
    //     console.log(data);
    //     // msgSend();
    // }).catch(function (error) {
    //     // error
    //     console.log("=============error==============");
    //     console.log(error);
    // });

    event.reply(msgs[index]).then(function (data) {
        // success
        console.log("=============success==============");
        console.log(event.message.text);
        console.log(data);
        index = index + 1;
        var timer = setInterval(function(){
            console.log(index);
            bot.push(event.userId, msgs[index]);
            index = index + 1;
            if (index >= msgs.length) {
                clearTimeout(timer);
            }
        }, 2000);
        // msgSend();
    }).catch(function (error) {
        // error
        console.log("=============error==============");
        console.log(error);
    });
}
bot.on('message', function (event) {
    console.log(event); //把收到訊息的 event 印出來看看
    console.log(event.message); //把收到訊息的 event 印出來看看
    console.log(reply.msgReply(event.message.text));
    msgs = reply.msgReply(event.message.text);
    msgSend(event);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//express port:3000
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port:", port);
});

