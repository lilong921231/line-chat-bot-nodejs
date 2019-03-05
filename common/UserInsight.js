// http://52.199.78.16:8080/pserver/execute?channel=MIZUHO_QA
const http = require("http");
const insightEntity = require("./entity/InsightEntity");
const userInsight = new insightEntity();

function getUserInsights(userId, date) {
    return new Promise((resolve, reject)=>{
        const options = userInsight.getOptions(userId, date);

        const postData = userInsight.getInsights("en");

        let response = "";
        const req = http.request(options,function(res){

            console.log('STATUS: ' + res.statusCode);
            if (res.statusCode === 200) {
                console.log(res.headers);
                res.setEncoding('utf-8');
                res.on('data',function(chunk){
                    // console.log(chunk);
                    response += chunk;
                });
                res.on('end',function(chunk){
                    console.log("============response================");
                    console.log(JSON.parse(response));
                    resolve(JSON.parse(response));
                });
            }
        }).on('error',function(e){
            console.log('problem with request: ' + e.message);
            console.log(e);
        });

        req.write(JSON.stringify(postData));

        req.end();
    });
}

module.exports = {
    getUserInsights
};
