function msgReply(text) {
    switch (text) {
        case "1":
            return msgStart();
            break;
        case "2":
            return msgTeaser();
            break;
        default:
            return text;
    }
}

function msgTeaser() {
    return ["msgTeaser"];
}

function msgStart() {
    var talk_block = [
        {
            "type": "text",
            "text": "おはようございます。\n今日は月曜日ですね。\n今日からまた新しい\n一週間の始まりです。\n現在の口座残高\nは657,980円です。"
        },
        {
            "type": "text",
            "text": "今週の口座入出金予定をご案内します。"
        },
        {
            "type": "flex",
            "altText": "Flex Message",
            "contents": {
                "type": "bubble",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "給与",
                        },
                        {
                            "type": "text",
                            "text": "256,300円",
                            "align": "end"
                        }
                    ]
                },
                "hero": {
                    "type": "image",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_4_news.png",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover"
                }
            }
        }
    ];
    
    return talk_block;
}

module.exports = {
    msgReply
};
