function msgReply(text) {
    /*var talk_block = {
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
    }:*/

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
                            "size": "sm",
                            "weight": "bold",
                            "color": "#AAAAAA"
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
                    "aspectMode": "cover",
                    "action": {
                        "type": "uri",
                        "label": "Action",
                        "uri": "https://linecorp.com/"
                    }
                }
            }
        }
    ];
    // return talk_block[parseInt(text) -1];
    return talk_block;
}

module.exports = {
    msgReply
};
