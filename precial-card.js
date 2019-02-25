function cardPlans(contents, flag) {
    let year = "2019年";
    let date = "XX月XX日（月）";
    const color1 = "#2E75B6";
    if(flag) {
        return {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "　　　　　" + year,
                            "size": "sm",
                            "color": color1
                        },
                        {
                            "type": "text",
                            "text": "　　　　　XX月XX日（水）",
                            "size": "lg",
                            "color": color1
                        }
                    ]
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "　　　" + contents.category
                        },
                        {
                            "type": "text",
                            "text": contents.price + "円　　",
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
        };
    }
    return {
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
                        "text": year,
                        "size": "sm",
                        "color": color1
                    },
                    {
                        "type": "text",
                        "text": "　XX月XX日（月）",
                        "size": "lg",
                        "color": color1
                    }
                ]
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "　　" + contents.category,
                    },
                    {
                        "type": "text",
                        "text": contents.price + "円　　　",
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
    };
}

module.exports = {
    cardPlans
};