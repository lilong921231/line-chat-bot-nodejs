function headers(userId, time) {
    const header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'authToken': userId
    };
    if (time) {
        header['effectivetime'] = time;
    }
    return header;
}

class insightRequestEntity {
    getInsights(lang){
        return {
            "type": "getInsights",
            "protocolVersion": "2.5",
            "autoGenerate": false,
            "showTeasers": true,
            "showFacts": true,
            "ctxId": "dashboard",
            "lang": lang
        }
    }
    getOptions(userId, date) {
        return {
            method: 'POST',
                host: '52.199.78.16',
            port: '8080',
            path: '/pserver/execute?channel=MIZUHO_QA',
            headers: headers(userId, date)
        };
    }
}

module.exports = insightRequestEntity;