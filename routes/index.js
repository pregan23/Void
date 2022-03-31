const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/', controllers.checkUserName)

router.post('/login', controllers.createUser)

router.get('/myVoid/:id', controllers.getConversations)

router.post('/myVoid/:id', controllers.createConversation)

router.get('/myVoid/:id/:msg_id', controllers.getMessages)


module.exports = router;