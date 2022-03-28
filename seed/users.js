const db = require('../db')
const User = require('../models/User.jsx')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        { userName: 'User1', password: 'User1', conversations: [] },
        { userName: 'User2', password: 'User2', conversations: [] }
    ]

    await User.insertMany(users)
    console.log('inserted User1 and User 2')
}
const run = async () => {
    await main()
    db.close()
}
run()