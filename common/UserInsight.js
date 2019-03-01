const http = require("http");
const querystring = require('querystring');
// http://52.199.78.16:8080/pserver/execute?channel=MIZUHO_QA
function getUserInsights(userId) {

    var postData = {
        "type": "getInsights",
        "protocolVersion": "2.5",
        "autoGenerate": false,
        "showTeasers": true,
        "showFacts": true,
        "ctxId": "dashboard",
        "lang": "en"
    };

    var content = querystring.stringify(postData);
    var options = {
        hostname: 'http://52.199.78.16',
        port: 8080,
        path: '/pserver/execute?channel=MIZUHO_QA',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authToken': 'B_2307',
            'effectivetime': '03/01/2019 00:00'
        }
    };

    var req = http.request(options, function (res) {
        console.log(res);
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

    // write data to request body
    req.write(content);

    req.end();

}

module.exports = {
    getUserInsights
};
