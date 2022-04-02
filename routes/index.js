const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/', controllers.checkUserName)

router.post('/signup', controllers.createUser)

router.get('/myVoid/:id', controllers.getConversations)

router.post('/myVoid/:id', controllers.createConversation)

router.delete('/myVoid/:id', controllers.deleteThread)

router.get('/myVoid/:id/:msg_id', controllers.getMessages)

router.get('/myVoid/:id/search/:user_name', controllers.getUserId)

router.post('/myVoid/:id/new_message/:msg_id', controllers.sendMessage)

// router.delete('/myVoid/:id/new_message/:msg_id', controllers.deleteMessage)

router.put('/message/:id', controllers.updateMessage)


module.exports = router;