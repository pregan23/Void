const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Message = new Schema(
    {
        content: { type: String, required: true},
        author_id: { type: Schema.Types.ObjectId, ref: 'User'},
        conversation_id: { type: Schema.Types.ObjectId, ref: 'Conversation'}
    }
)

module.exports = mongoose.model('messages', Message)