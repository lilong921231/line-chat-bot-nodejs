function msgReply(text) {
    const regExp = /^B_[0-9]{4}$/;
    if (text === "B_") {
        return msgInsights("B_2307");
    } else if (regExp.test(text)) {
        return msgInsights(text);
    }

    switch (text) {
        case "1":
        case "2":
            return msgStart(parseInt(text));
        case "3":
            return msgWed();
        default:
            return [text];
    }
}

function msgInsights() {
    const talk_block = ["msgTeaser"];
    return talk_block;
}

function msgWed() {
    const talk_block = [{
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
                        "text": "3月の家賃"
                    },
                    {
                        "type": "text",
                        "text": "１２万円",
                        "align": "center",
                        "weight": "bold"
                    },
                    {
                        "type": "text",
                        "text": "の引き落としが完了しました"
                    }
                ]
            }
        }
    }];
    talk_block.push({
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
                        "text": "現在の家賃と同等の月々返済額で、35年ローンをお借りする場合、一般的に",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "3,919万円",
                        "align": "center",
                        "weight": "bold"
                    },
                    {
                        "type": "text",
                        "text": "の借入可能枠となります。"
                    }
                ]
            }
        }
    });
    talk_block.push({
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
                        "text": "10年後42歳となるあなたにとって、お勧めとなるご返済期間が25年となります。同じように月々の返済額が12万円ですと、一般的に、",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "3000万円",
                        "align": "center",
                        "weight": "bold"
                    },
                    {
                        "type": "text",
                        "text": "の借入可能枠となります。"
                    }
                ]
            }
        }
    });
    talk_block.push({
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
                        "text": "同じ借入枠で返済期間が違う場合の毎月の返済額も違います。",
                        "wrap": true
                    },
                    {
                        "type": "separator",
                        "margin": "sm",
                        "color": "#FFFFFF"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "借入枠",
                                        "size": "xxs",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "借入時の年齢",
                                        "size": "xxs",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "返済期間",
                                        "size": "xxs",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "毎月の返済額",
                                        "size": "xxs",
                                        "align": "center"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "4,000\n万円",
                                                "size": "xxs",
                                                "align": "center",
                                                "gravity": "center",
                                                "wrap": true
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "32歳",
                                                "size": "xxs",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "42歳",
                                                "size": "xxs",
                                                "align": "center"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "35年",
                                                "size": "xxs",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "25年",
                                                "size": "xxs",
                                                "align": "center"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "12万2473円",
                                                "size": "xxs",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "15万9974円",
                                                "size": "xxs",
                                                "align": "center"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "separator",
                        "margin": "sm",
                        "color": "#FFFFFF"
                    },
                    {
                        "type": "text",
                        "text": "一般的に、",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "マイホームを早く購入すれば返済期間を長くでき、その分月々の返済額が抑えられます。",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "40代になるあなたにとって、子供の教育費、老後への備え、親の介護などにもお金が必要になる時期です。",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "住宅費で節約できたお金は少しでも家計のお助けとなります！",
                        "wrap": true
                    }
                ]
            }
        }
    });
    talk_block.push({
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
                        "text": "家計を圧迫することなく、",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "夢のマイホームが購入できるかも・・・！",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "これからのライフプラン、マネープランを含めて、対面で、ファイナンシャルアドバイザーに相談してみませんか？",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "今すぐに相談可能な、お近くの店舗をご紹介することも可能です。",
                        "wrap": true
                    }
                ]
            },
            "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "none",
                "contents": [
                    {
                        "type": "button",
                        "action": {
                            "type": "message",
                            "label": "相談する",
                            "text": "相談する"
                        }
                    },
                    {
                        "type": "button",
                        "action": {
                            "type": "message",
                            "label": "また今度にする",
                            "text": "また今度にする"
                        }
                    }
                ]
            }
        }
    });
    return talk_block;
}

function msgStart(index) {
    const talk_block = [
        {
            "type": "text",
            "text": "おはようございます。\n今日は月曜日ですね。\n今日からまた新しい\n一週間の始まりです。\n現在の口座残高\nは657,980円です。"
        }
    ];
    if (index !== 2) {
        talk_block.push({
            "type": "text",
            "text": "今週の口座入出金予定をご案内します。"
        });
    }
    talk_block.push(msgStartType(index - 1));

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
                                            "text": "　　給与"
                                        },
                                        {
                                            "type": "text",
                                            "text": "256,300円　　　",
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
                                            "text": "　　　口座振込（家賃）"
                                        },
                                        {
                                            "type": "text",
                                            "text": "- 120,000円　　",
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
                                            "text": "　　ABCカード引落し"
                                        },
                                        {
                                            "type": "text",
                                            "text": "- 51,780円　　　",
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
                                },
                                {
                                    "type": "text",
                                    "text": "５０，０００円",
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
