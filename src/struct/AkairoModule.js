const { AkairoHandlerEvents } = require('../util/Constants');

/**
 * Base class for a module.
 * @param {string} id - ID of module.
 * @param {AkairoModuleOptions} [options={}] - Options.
 */
class AkairoModule {
    constructor(id, { category = 'default', enabled = true } = {}) {
        /**
         * ID of the module.
         * @type {string}
         */
        this.id = id;

        /**
         * Determines if module is enabled.
         * @type {boolean}
         */
        this.enabled = enabled;

        /**
         * ID of the category this belongs to.
         * @type {string}
         */
        this.categoryID = category;

        /**
         * Category this belongs to.
         * @type {Category}
         */
        this.category = null;

        /**
         * The filepath.
         * @type {string}
         */
        this.filepath = null;

        /**
         * The Akairo client.
         * @type {AkairoClient}
         */
        this.client = null;

        /**
         * The handler.
         * @type {AkairoHandler}
         */
        this.handler = null;
    }

    /**
     * Reloads the module.
     * @returns {AkairoModule}
     */
    reload() {
        return this.handler.reload(this.id);
    }

    /**
     * Removes the module.
     * @returns {AkairoModule}
     */
    remove() {
        return this.handler.remove(this.id);
    }

    /**
     * Returns the ID.
     * @returns {string}
     */
    toString() {
        return this.id;
    }

    /**
     * Called once the client emits `ready`
     * @returns {any}
     * @abstract
     */
    // eslint-disable-next-line no-empty-function
    init() {
        return AkairoHandlerEvents.INIT_DEFAULT;
    }
}

module.exports = AkairoModule;

/**
 * Options for module.
 * @typedef {Object} AkairoModuleOptions
 * @prop {string} [category='default'] - Category ID for organization purposes.
 */
