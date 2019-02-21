const config = require('./CHANNEL_CONFIG');
const initial = require('./init-bot')

initialize();

function initialize() {
    initial.initBot(config);
}

