const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/login', controllers.checkUserName)

router.post('/login', controllers.createUser)

router.post('/myVoid', controllers.createConversation)

module.exports = router;