const User = require('../models/User');
const Conversation = require('../models/Conversation')
const Message = require('../models/Message');
const req = require('express/lib/request');

const getUserId = async (req, res) => {
    

const secondId = await User.find( { userName: {$eq: req.params.user_name} })
if(!!secondId.length){
    res.status(201).json(secondId[0]._id)
}

}

const deleteThread = async (req, res) => { 
    try{

    const deleted=await Conversation.findByIdAndDelete( req.body._id )
    if(deleted) {
        return res.status(201).send('deleted')
    }   
        throw new Error('no such conversation')
}       catch (error) {
    res.status(500).send(error.message)
}

}

const getMessages = async (req, res) => {

    const messages = await Message.find( { conversation_id: { $eq: req.params.msg_id} })
    return res.status(201).json(messages)
}

const getConversations = async (req, res) => {

        
        
        const threads = await Conversation.find( { user_ids: { $in: req.params.id }})
        return res.status(201).json(threads)
  
    
}

const sendMessage = async (req, res) => {
    const message = await new Message(req.body)
    await message.save()
    console.log('message created')
    return res.status(200).json(message)
}


const updateMessage = async (req, res) => {
    const { id } = req.params
    const edit = await Message.findByIdAndUpdate( id, {"content": req.body.content} )
    if (edit) {
        console.log('message edited')
        return res.status(200).json(edit) 
    }
    
    return res.status(500).send('no dice')
}

const createConversation = async (req, res) => {
    try{
    const conversation = await new Conversation(req.body)
    await conversation.save()

    if(conversation) {console.log('Conversation created')
    return res.status(201).json({conversation})};}
    catch (error) {
        return res.status(204).send('not found')
    }
   
    
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        console.log('user created!')
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

    const userExists = await User.find( { userName: {$eq:userName}, password: {$eq:password} })
    console.log(userExists)
    
    if (!!userExists.length) {
      
        return res.status(201).json(userExists[0])
        
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
    getMessages,
    getUserId,
    deleteThread,
    sendMessage,
    updateMessage
}