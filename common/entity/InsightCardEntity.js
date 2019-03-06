const imgUrl = "https://sinkibank.herokuapp.com/images/teaser_images/";

const moment = require('moment');

function parseEntity(data) {
    const resultEntity = [];
    console.log(data.status + ", " + data.statusMessage);
    console.log(data.requestType + " ok=" + data.ok + ", " + data.unreadMessages);
    if (data.status === "200") {
        const insights = data.insights;
        insights.forEach(function (insight) {
            // console.log(insight);
            if (insight.teaserTemplate === "image") {
                const info = {}, teaser = insight.teaserBlocks;
                info.date = moment(teaser[1].date).format("M月 DD日");
                info.title = teaser[2].text;
                info.text = teaser[3].text;
                // info.url = imgUrl + teaser[4].url + ".png";
                info.url = imgUrl + "CG100.png";
                resultEntity.push(insightCardImage(info));
            } else if ("horizontalBar"){
                console.log(insight.teaserBlocks);
            } else {
                console.log(insight.teaserTemplate);
                console.log(insight.teaserBlocks);
            }
        });
        return resultEntity;
    }
}

function insightCardImage(insight) {
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "bubble",
            "direction": "ltr",
            "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                    {
                        "type": "text",
                        "text": insight.date,
                        "size": "sm",
                        "color": "#5A5A5A"
                    },
                    {
                        "type": "text",
                        "text": insight.title,
                        "size": "lg"
                    },
                    {
                        "type": "text",
                        "text": insight.text,
                        "wrap": true
                    },
                    {
                        "type": "image",
                        "url": insight.url,
                        "size": "full",
                        "aspectRatio": "3:1"
                    }
                ]
            }
        }
    }
}
module.exports = {
    parseEntity
};

const insight1 = {
    id: '4239df92-7e8a-471d-a3d8-a15179669cbf',
    insightId: 'EOMCashFlowAnalysis',
    useCaseId: 'EOMCashFlowAnalysis_UC3',
    segment: 'Party',
    businessId: '',
    lineOfBusiness: '',
    generatedDate: '2017-01-13T05:09:25.853Z',
    presentedDate: '2017-01-14T23:22:23.773Z',
    selectedDate: '',
    score: 7,
    category1: 'in_out',
    category2: 'Spending',
    category3: 'money_in',
    insightType: 'STORY',
    status: 'unread',
    type: 'Inform Me',
    highlighted: false,
    teaserTemplate: 'horizontalBar',
    userTag: '',
    teaserBlocks:
        [{blockId: 'icon', type: 'image', url: '-', alt: '-'},
            {
                blockId: 'date',
                type: 'date-box',
                date: '2017-01-13T05:09:26.586Z'
            },
            {
                blockId: 'title',
                type: 'txt',
                text: 'Account Activity Summary'
            },
            {
                blockId: 'teaser-text',
                type: 'txt',
                text: 'Get the details of your account activity during December'
            },
            {
                blockId: 'chart',
                type: 'bar-chart',
                class: 'teaser-body',
                direction: 'horizontal',
                categories: [Array],
                series: [Array],
                seriesLabels: [Array],
                accessibilityCategories: [Array]
            }],
    actions: [],
    facts:
        {
            storyId: 'EOMCashFlowAnalysis_UC3',
            confirmedTransaction:
                {
                    type: 'PTransaction',
                    cols: [Array],
                    rows: [Array],
                    attributesTypes: [Array]
                },
            bizClass:
                {
                    type: 'PTable',
                    cols: [Array],
                    rows: [Array],
                    attributesTypes: [Array]
                },
            confirmedParty:
                {
                    type: 'PParty',
                    cols: [Array],
                    rows: [Array],
                    attributesTypes: [Array]
                },
            seriesNames:
                {
                    type: 'PTable',
                    cols: [Array],
                    rows: [Array],
                    attributesTypes: [Array]
                },
            periods:
                {
                    type: 'PTable',
                    cols: [Array],
                    rows: [Array],
                    attributesTypes: [Array]
                },
            currentDate:
                {
                    type: 'PDate',
                    cols: [Array],
                    rows: [Array],
                    attributesTypes: [Array]
                },
            accounts:
                {
                    type: 'PTable',
                    cols: [Array],
                    rows: [Array],
                    attributesTypes: [Array]
                },
            cashFlowTransactions:
                {
                    type: 'PTable',
                    cols: [Array],
                    rows: [Array],
                    attributesTypes: [Array]
                }
        }
};