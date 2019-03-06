const moment = require('moment');
const talkEntity = require('./entity/TalkEntity');
const insightApi = require('./entity/InsightCardEntity');
const talk = new talkEntity();
const userApi = require('./UserInsight');

function talkServer(eventSelect) {
    return new Promise((resolve)=>{
        const regExp = /^B_[0-9]{4}$/;
        if (regExp.test(eventSelect)) {
            const date = moment().format("MM/DD/YYYY 00:00");
            userApi.getUserInsights(eventSelect, date).then(function (res) {
                console.log("=========res---------");
                // return eventSelect;
                resolve(insightApi.parseEntity(res));
            });
        } else {
            switch (eventSelect) {
                case '1':
                    console.log("=========test1===========");
                    resolve(talk.firstTimeEntity('5000000'));
                    break;
                case '2':
                    console.log("=========image===========");
                    var day = "日月火水木金土".charAt(new Date().getDay());
                    resolve(talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000'));
                    break;
                case '3':
                    console.log("=========test2===========");
                    var day = "日月火水木金土".charAt(new Date().getDay());
                    resolve({
                        type: "flex",
                        altText: "Flex Message",
                        contents: {
                            type: "bubble",
                            direction: "ltr",
                            header: {
                                type: "box",
                                layout: "vertical",
                                contents: [
                                    {
                                        type: "text",
                                        text: "今週の口座入出金予定",
                                        align: "start"
                                    },
                                    {
                                        type: "text",
                                        text: "をご案内します。"
                                    },
                                    {
                                        type: "button",
                                        action: {
                                            type: "postback",
                                            label: "OK",
                                            data: "2"
                                            // contents: talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000')
                                        }
                                    }
                                ]
                            }
                        }
                    });
                    break;
            }
        }
    });
    // const regExp = /^B_[0-9]{4}$/;
    // if (regExp.test(eventSelect)) {
    //     return new Promise((resolve, reject)=>{
    //         userApi.getUserInsights(eventSelect).then(function (res) {
    //             console.log("-------------------reject talkServer---------------------");
    //             console.log(JSON.stringify(reject));
    //             console.log("=========res---------");
    //             console.log(res);
    //             // return eventSelect;
    //             resolve(res, eventSelect);
    //         });
    //     });
    // }
    // switch (eventSelect) {
    //     case '1':
    //         console.log("=========test1===========");
    //         return talk.firstTimeEntity('5000000');
    //         // resolve(talk.firstTimeEntity('5000000'));
    //     case '2':
    //         console.log("=========image===========");
    //         var day = "日月火水木金土".charAt(new Date().getDay());
    //         return talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000');
    //         // resolve(talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000'));
    //     case '3':
    //         console.log("=========test2===========");
    //         var day = "日月火水木金土".charAt(new Date().getDay());
    //         // return talk.receiptsOfWeek();
    //         return {
    //             type: "flex",
    //             altText: "Flex Message",
    //             contents: {
    //                 type: "bubble",
    //                 direction: "ltr",
    //                 header: {
    //                     type: "box",
    //                     layout: "vertical",
    //                     contents: [
    //                         {
    //                             type: "text",
    //                             text: "今週の口座入出金予定",
    //                             align: "start"
    //                         },
    //                         {
    //                             type: "text",
    //                             text: "をご案内します。"
    //                         },
    //                         {
    //                             type: "button",
    //                             action: {
    //                                 type: "postback",
    //                                 label: "OK",
    //                                 data: "2"
    //                                 // contents: talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000')
    //                             }
    //                         }
    //                     ]
    //                 }
    //             }
    //         };
    //         // resolve({
    //         //     type: "flex",
    //         //     altText: "Flex Message",
    //         //     contents: {
    //         //         type: "bubble",
    //         //         direction: "ltr",
    //         //         header: {
    //         //             type: "box",
    //         //             layout: "vertical",
    //         //             contents: [
    //         //                 {
    //         //                     type: "text",
    //         //                     text: "今週の口座入出金予定",
    //         //                     align: "start"
    //         //                 },
    //         //                 {
    //         //                     type: "text",
    //         //                     text: "をご案内します。"
    //         //                 },
    //         //                 {
    //         //                     type: "button",
    //         //                     action: {
    //         //                         type: "postback",
    //         //                         label: "OK",
    //         //                         data: "2"
    //         //                         // contents: talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000')
    //         //                     }
    //         //                 }
    //         //             ]
    //         //         }
    //         //     }
    //         // });
    //     default:
    //         console.log("=========switch default===========");
    //         return eventSelect;
    // }
}

module.exports = {
    talkServer
};
