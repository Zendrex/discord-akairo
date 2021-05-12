const { Command } = require('../..');

class InitCommand extends Command {
    constructor() {
        super('init', {
            aliases: ['init']
        });
    }

    init() {
        this.text = this.client.user.tag;
        return true;
    }

    exec(message) {
        return message.reply(this.text);
    }
}

module.exports = InitCommand;
