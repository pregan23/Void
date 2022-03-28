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

// const checkUserName = async (req,res) => {
//     try{
//     const { userName } = req.params
//     const user = await User.find( { userName: userName })
//     if (user) {return res.status(200).send('User found'),
//     // checkPassword()
//     }
//     throw new Error('')
//     } catch
// }

module.exports = {
    createUser,
    // checkUserName
}