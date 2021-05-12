/* eslint-disable no-console */

const { Listener } = require('../..');

class InitListener extends Listener {
    constructor() {
        super('command-init', {
            emitter: 'commandHandler',
            event: 'init',
            category: 'commandHandler'
        });
    }

    exec(command) {
        console.log(`Command Initialized: ${command.id}`);
    }
}

module.exports = InitListener;
