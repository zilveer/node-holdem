/**
 * Player
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        // ID created automatically
        username: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            required: false
        },
        chips: 100 // 50 x 2 (big blind)
    },
    protectedAttributes: ["email"],
    // toJSON: function() {
    //     var object = this.toObject();
    //     delete object.email;
    //     return object;
    // }
};
