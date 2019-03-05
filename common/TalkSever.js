const talkEntity = require('./entity/TalkEntity');
const talk = new talkEntity();
const userApi = require('./UserInsight');


function talkServer(eventSelect) {
    return new Promise((resolve, reject)=>{

        const regExp = /^B_[0-9]{4}$/;
        if (regExp.test(eventSelect)) {
            userApi.getUserInsights(eventSelect).then(function (res) {
                console.log("=========res---------");
                console.log(res);
                // return eventSelect;
                resolve(eventSelect);
            });
        }
        switch (eventSelect) {
            case '1':
                console.log("=========test1===========");
                // return talk.firstTimeEntity('5000000');
                resolve(talk.firstTimeEntity('5000000'));
            case '2':
                console.log("=========image===========");
                var day = "日月火水木金土".charAt(new Date().getDay());
                // return talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000');
                resolve(talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000'));
            case '3':
                console.log("=========test2===========");
                var day = "日月火水木金土".charAt(new Date().getDay());
                // return talk.receiptsOfWeek();
                // return {
                //     type: "flex",
                //     altText: "Flex Message",
                //     contents: {
                //         type: "bubble",
                //         direction: "ltr",
                //         header: {
                //             type: "box",
                //             layout: "vertical",
                //             contents: [
                //                 {
                //                     type: "text",
                //                     text: "今週の口座入出金予定",
                //                     align: "start"
                //                 },
                //                 {
                //                     type: "text",
                //                     text: "をご案内します。"
                //                 },
                //                 {
                //                     type: "button",
                //                     action: {
                //                         type: "postback",
                //                         label: "OK",
                //                         data: "2"
                //                         // contents: talk.detailedOfWeek('2018-11-09', day, '500000', '-2000000', '20000000')
                //                     }
                //                 }
                //             ]
                //         }
                //     }
                // };
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
        }
    });
}

module.exports = {
    talkServer
};
