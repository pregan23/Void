const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/', controllers.checkUserName)

// router.post('/login', controllers.createUser)

router.get('/myVoid/:id', controllers.getConversations)


module.exports = router;