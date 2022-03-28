const User = require('../models/User.jsx');

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
//     const user = await User.find( { userName: req.params.userName })
//     } catch
// }

module.exports = {
    createUser
}