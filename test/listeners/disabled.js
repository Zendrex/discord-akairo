/* eslint-disable no-console */

const { Listener } = require('../..');

class DisabledCommandListener extends Listener {
    constructor() {
        super('command-load', {
            emitter: 'commandHandler',
            event: 'disabled',
            category: 'commandHandler'
        });
    }

    exec(command) {
        console.log(`Command disabled: ${command.id}`);
    }
}

module.exports = DisabledCommandListener;
