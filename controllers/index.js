const User = require('../models/User.jsx');

// const checkPassword = async (req, res) => {}

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
    if (userExists) {return res.status(200).json(userExists)
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
    checkUserName
}