const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        userName: { type: String, required: true },
        password: { type: String, required: true },
        // conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }]

    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)