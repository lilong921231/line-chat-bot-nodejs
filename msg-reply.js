function msgReply(text) {
    var reg = /^B_[0-9]{4}$/;
    if (text.equals("B_")) {
        return msgInsights("B_2307");
    } else if (reg.test(text)) {
        return msgInsights(text);
    }
    
    switch (text) {
        case "1":
            return msgStart();
            break;
        default:
            return text;
    }
}

function msgInsights() {
    var talk_block = ["msgTeaser"];
    return talk_block;
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
