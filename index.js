const serverTest = require('./common/TalkSever');
const express = require('express');
const bot = require('./line.config');

const app = express();
let server;

botInitial();
serverInitial();

function botInitial () {
    bot.on('message', function(event) {
        console.log('+++++++++++++++++++Index event+++++++++++++++++++');
        console.log(JSON.stringify(event));
        console.log('+++++++++++++++++++Index event+++++++++++++++++++');

        serverTest.talkServer(event.message.text).then(function (dataText) {
            console.log(dataText);
            event.reply(dataText).then(function (data) {
                // success
                console.log('=============== server event =================');
                console.log(data);

                console.log('=============JSON================');
                console.log(JSON.stringify(dataText));
                console.log('=============JSON end================');
            }).catch(function (error) {
                // error
                console.log(error);
                console.log('=============== error =================');
            });
        }).catch(function (error) {
            // error
            console.log(error);
            console.log('=============== error =================');
        });
    });

    bot.on('postback', function (event) {

        console.log(server._events);
        console.log('=============postback JSON=============');

        console.log(event);
        console.log(JSON.stringify(event.postback));
        console.log('=============postback JSON end=============');

        serverTest.talkServer(event.postback.data).then(function (dataText) {
            event.reply(dataText).then(function (data) {
                console.log('=============postback=============');
                console.log(data);
                console.log(JSON.stringify(dataText));
            }).catch(function(error) {
                console.log('==============error=============')
                console.log(error);
            })
        }).catch(function (error) {
            // error
            console.log(error);
            console.log('=============== error =================');
        });
    });
}

function serverInitial() {
    const linebotParser = bot.parser();
    app.post('/', linebotParser);

    //イメージをロードして、パス：public/images
    app.use(express.static('public'));
//     app.get('/public/images/*', function (req, res) {
//         res.sendFile( __dirname + "/" + req.url );
//         console.log("Request for " + req.url + " received.");
//     });

    //express port:3000
    server = app.listen(process.env.PORT || 3000, function() {
        const port = server.address().port;
        console.log("App now running on port:", port);
    });
}

// -----------------------------------------------------------------------------
// モジュールのインポート
/*
var server = require("express")();
var line = require("@line/bot-sdk"); // Messaging APIのSDKをインポート

// -----------------------------------------------------------------------------
// パラメータ設定
var line_config = {
    channelId: "1646638453",
    channelSecret: "c20aee7e28b0b762cbf5adb9e8a1fa96",
    channelAccessToken: "noRmAnxXUXdfOEmrasRRY0IF/YPJd+6WF5XXtQ0Nzhl438A+cvFalWwMAOSY1V2hwY3e6xQERfmGBhv2CxuCiJDF80xy4Ryo9N/" +
        "mMTsd+6z5AZNXJI6fXtL2eCr/gUSIovXzKIDaGBlEDFSaF7BW4gdB04t89/1O/w1cDnyilFU="
};

// -----------------------------------------------------------------------------
// Webサーバー設定
server.listen(process.env.PORT || 3000);

// APIコールのためのクライアントインスタンスを作成
const bot = new line.Client(line_config);
// -----------------------------------------------------------------------------
// ルーター設定
server.post('/', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200);

    // すべてのイベント処理のプロミスを格納する配列。
    let events_processed = [];

    // イベントオブジェクトを順次処理。
    req.body.events.forEach((event) => {
        // この処理の対象をイベントタイプがメッセージで、かつ、テキストタイプだった場合に限定。
        // if (event.type === "message" && event.message.type === "text"){
            events_processed.push(bot.replyMessage(event.replyToken,
                serverTest.talkServer(event.message.text)));
        // }
    });

    // すべてのイベント処理が終了したら何個のイベントが処理されたか出力。
    Promise.all(events_processed).then(
        (response) => {
            console.log(`${response.length} event(s) processed.`);
        }
    );
});*/
