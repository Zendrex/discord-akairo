const { Command } = require('../..');

class EvalCommand extends Command {
    constructor() {
        super('timespan', {
            aliases: ['timespan', 'time'],
            args: [
                {
                    id: 'timespan',
                    type: 'timespan'
                }
            ]
        });
    }

    async exec(message, { timespan }) {
        message.channel.send(timespan);
    }
}

module.exports = EvalCommand;
