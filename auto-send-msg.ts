const schedule = require('node-schedule');

function scheduleExec() {
    scheduleObjectSendMessage();
    scheduleRecurrenceRule();
}


function scheduleObjectSendMessage(){

    const rule = new schedule.RecurrenceRule();
    const userIds = require("line-user-friends");

    //second minute hour dayOfMonth month dayOfWeek
    rule.minute = 35;
    rule.hour = 11;
    rule.dayOfWeek =[1,2,3,4,5,6,7];
    schedule.scheduleJob(rule, function(){
        console.log('现在时间：',new Date());
        for (let i = 0; i < userIds.length; i++) {
            console.log(userIds[i]);
        }
    });
}

function scheduleRecurrenceRule(){

    var rule = new schedule.RecurrenceRule();
    // rule.dayOfWeek = 2;
    // rule.month = 3;
    // rule.dayOfMonth = 1;
    // rule.hour = 1;
    // rule.minute = 42;
    rule.second = 0;

    schedule.scheduleJob(rule, function(){
        console.log('scheduleRecurrenceRule:' + new Date());
    });

}

module.exports = {
    scheduleExec
};