function msgReply(text) {
    var reg = /^B_[0-9]{4}$/;
    if (text === "B_") {
        return msgInsights("B_2307");
    } else if (reg.test(text)) {
        return msgInsights(text);
    }
    
    switch (text) {
        case "1":
            return msgStart(text);
            break;
        case "2":
            return msgStart(text);
        default:
            return [text];
    }
}

function msgInsights() {
    var talk_block = ["msgTeaser"];
    return talk_block;
}

function msgStart(text) {
    var talk_block = [
        {
            "type": "text",
            "text": "おはようございます。\n今日は月曜日ですね。\n今日からまた新しい\n一週間の始まりです。\n現在の口座残高\nは657,980円です。"
        },
        {
            "type": "text",
            "text": "今週の口座入出金予定をご案内します。"
        },
        msgStartType(parseInt(index))
    ];
    
    return talk_block;
}

function msgStartType (index) {
    const msgType = [
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
        },
        {
            "type": "flex",
            "altText": "Flex Message",
            "contents": {
                "type": "bubble",
                "direction": "ltr",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "今週の口座入出金予定をご案内します。",
                            "wrap": true
                        }
                    ]
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "md",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "flex": 1,
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "2019年",
                                            "size": "sm",
                                            "color": "#2E75B6"
                                        },
                                        {
                                            "type": "text",
                                            "text": "　XX月XX日（月）",
                                            "size": "lg",
                                            "color": "#2E75B6"
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "　　給与",
                                            "size": "sm"
                                        },
                                        {
                                            "type": "text",
                                            "text": "256,300円　　　",
                                            "size": "sm",
                                            "align": "end"
                                        },
                                        {
                                            "type": "separator",
                                            "margin": "md",
                                            "color": "#FFFFFF"
                                        },
                                        {
                                            "type": "image",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_4_news.png",
                                            "align": "start",
                                            "gravity": "bottom",
                                            "size": "3xl",
                                            "aspectRatio": "4:3",
                                            "aspectMode": "cover"
                                        }
                                    ]
                                },
                                {
                                    "type": "separator",
                                    "color": "#FFFFFF"
                                },
                                {
                                    "type": "spacer",
                                    "size": "xxl"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "　　　　　2019年",
                                            "size": "sm",
                                            "color": "#2E75B6"
                                        },
                                        {
                                            "type": "text",
                                            "text": "　　　　　XX月XX日（水）",
                                            "size": "lg",
                                            "color": "#2E75B6"
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "　　　口座振込（家賃）",
                                            "size": "sm"
                                        },
                                        {
                                            "type": "text",
                                            "text": "- 120,000円　　",
                                            "size": "sm",
                                            "align": "end"
                                        },
                                        {
                                            "type": "separator",
                                            "color": "#FFFFFF"
                                        },
                                        {
                                            "type": "image",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_1.png",
                                            "margin": "md",
                                            "align": "end",
                                            "size": "3xl",
                                            "aspectRatio": "4:3",
                                            "aspectMode": "cover"
                                        }
                                    ]
                                },
                                {
                                    "type": "spacer",
                                    "size": "xxl"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "2019年",
                                            "size": "sm",
                                            "color": "#2E75B6"
                                        },
                                        {
                                            "type": "text",
                                            "text": "　XX月XX日（金）",
                                            "size": "lg",
                                            "weight": "bold",
                                            "color": "#2E75B6"
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "　　ABCカード引落し",
                                            "size": "sm"
                                        },
                                        {
                                            "type": "text",
                                            "text": "- 51,780円　　　",
                                            "size": "sm",
                                            "align": "end"
                                        },
                                        {
                                            "type": "separator",
                                            "margin": "md",
                                            "color": "#FFFFFF"
                                        },
                                        {
                                            "type": "image",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/02_1_news_thumbnail_2.png",
                                            "align": "start",
                                            "size": "3xl",
                                            "aspectRatio": "4:3",
                                            "aspectMode": "cover",
                                            "backgroundColor": "#FFFFFF"
                                        }
                                    ]
                                },
                                {
                                    "type": "spacer",
                                    "size": "xxl"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "xl",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "推奨する今週の可処分所得：",
                                    "size": "sm"
                                },
                                {
                                    "type": "text",
                                    "text": "５０，０００円",
                                    "size": "sm",
                                    "align": "center"
                                }
                            ]
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "action": {
                                "type": "message",
                                "label": "OK",
                                "text": "OK"
                            },
                            "color": "#2E75B6"
                        }
                    ]
                },
                "styles": {
                    "body": {
                        "backgroundColor": "#FFFFFF",
                        "separator": true,
                        "separatorColor": "#FFFFFF"
                    }
                }
            }
        }
    ];
    
    return msgType[index]
}

module.exports = {
    msgReply
};
