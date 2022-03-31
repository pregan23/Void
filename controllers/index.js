const User = require('../models/User');
const Conversation = require('../models/Conversation')
const Message = require('../models/Message')

// const checkPassword = async (req, res) => {}



const getMessages = async (req, res) => {

    const messages = await Message.find( { conversation_id: { $eq: req.params.msg_id} })
    return res.status(201).json(messages)
}

const getConversations = async (req, res) => {

        
        
        const threads = await Conversation.find( { user_ids: { $in: req.params.id }})
        return res.status(201).json(threads)
  
    
}
const createConversation = async (req, res) => {
    const conversation = await new Conversation(req.body)
    await conversation.save()
    console.log('Conversation created')
    return res.status(201).json({conversation})
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// const getConversations = async (req, res) => {
//     const threads = await Conversation.find( { user_ids: { $in: req._id}})
//     return res.status(201).json(threads)
// }

const checkUserName = async (req,res) => {
    try{
    const { userName, password } = req.body
    // const noUser = await User.find( { userName: {$nin:userName}})
    const userExists = await User.find( { userName: {$eq:userName}, password: {$eq:password} })
    console.log(userExists)
    // const userId = userExists[0]._id
    // console.log(userId)
    if (!!userExists.length) {
        // 
        // getConversations(userId)
        return res.status(201).json(userExists[0])
        
        
        // if (userId === undefined) {
            
        // }
        
        
        
        // if (userPass=userExists.password) {

        // }
    // checkPassword()
    }
    else if(!userExists.length) {

        return res.status(200).send('')
    }
    throw new Error('User not found.  You can create an account now by entering your desired password')
    
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createUser,
    checkUserName,
    createConversation,
    getConversations,
    getMessages
    // sendMessage
}