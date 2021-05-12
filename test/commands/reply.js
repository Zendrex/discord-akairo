const { Command } = require('../..');

class ReplyCommand extends Command {
    constructor() {
        super('reply', {
            aliases: ['reply']
        });
    }

    exec(message) {
        return message.reply('this is a reply!');
    }
}

module.exports = ReplyCommand;
