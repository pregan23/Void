const db = require('../db')
const User = require('../models/User')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        { userName: 'User1', password: 'User1' },
        { userName: 'User2', password: 'User2' },
        { userName: 'User3', password: 'User3' }
    ]

    await User.insertMany(users)
    console.log('inserted 3 users')
}
const run = async () => {
    await main()
    db.close()
}
run()