const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Conversation = new Schema(
    {
        userIds: { type: Array, required: true },
        name: { type: String, required: true },
        messages: { type: Array, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('conversations', Conversation)