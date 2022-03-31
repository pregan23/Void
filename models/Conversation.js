const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Conversation = new Schema(
    {

        name: { type: String, required: true },
        // messages: { type: Array, required: true },
        user_ids: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('conversations', Conversation)