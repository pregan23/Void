const User = require('../models/User.jsx');
const Conversation = require('../models/Conversation.jsx')

// const checkPassword = async (req, res) => {}

// const getConversations = async (req, res, _id) => {
    
//         const threads = await Conversation.findMany( { _id: { $in: userId }})
//         return res.status(201).json(threads)
  
    
// }
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

const checkUserName = async (req,res) => {
    try{
    const { userName, password } = req.body
    // const noUser = await User.find( { userName: {$nin:userName}})
    const userExists = await User.find( { userName: {$eq:userName}, password: {$eq:password} })
    if (userExists) {
        // getConversations()
        const userId = userExists[0]._id
        // if (userId === undefined) {
            
        // }
        // const getConversations = async (req, res, _id) => {
        //     const threads = await Conversation.find( { _id: { $in: _id}})
        //     return res.status(201).json(threads)
        // }
        return res.status(201).json(userId)
        
        // if (userPass=userExists.password) {

        // }
    // checkPassword()
    }
    // else if(noUser) {
    //     return res.status(200).send('No such user.  Create an account.')
    // }
    throw new Error('User not found.  You can create an account now by entering your desired password')
    
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createUser,
    checkUserName,
    createConversation
}