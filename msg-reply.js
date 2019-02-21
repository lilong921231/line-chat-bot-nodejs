function msgReply(text) {
    if(text !== '1') {
        return text;
    }
    var talk_block = {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "bubble",
            "direction": "ltr",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "おはようございます。今日は月曜日ですね。今日からまた新しい一週間の始まりです。\n現在の口座残高は657,980円です。\n今週の口座入出金予定をご案内します。",
                        "weight": "regular",
                        "wrap": true
                    }
                ]
            },
            "footer": {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {
                        "type": "button",
                        "action": {
                            "type": "message",
                            "label": "OK",
                            "text": "OK"
                        },
                        "color": "#5B9BD5"
                    }
                ]
            }
        }
    };
    return talk_block;
}

module.exports = {
    msgReply
};
