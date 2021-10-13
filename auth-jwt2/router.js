const Router =  require('express')
const controller = require('./controller.js')
const {check} = require('express-validator')
const roleMiddleware = require('./middleware/roleMiddleware.js')
const router = new Router()

router.post('/registration',[
    check('username', 'nameLenght').isLength({min:3, max:25}),
    check('password', 'passLength').isLength({min:8, max:20}),
    check('email', 'failEmail').isEmail()
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER','ADMIN']), controller.getUsers)
router.get('/confirmation', controller.confirmation)
router.post('/resend', controller.resend) 
router.get('/getDataUser', controller.getDataUser) 
router.post('/article',[
    roleMiddleware(['USER','ADMIN']),
    check('title', 'Заголовок слишком короткий' ).isLength({min:5, max:20}),
    check('content', 'Статья слишком короткая').isLength({min:10, max:500})
],controller.Article)
router.get('/getContent', controller.getContent)
router.get('/getArticle', controller.getArticle)
router.get('/logout', controller.logout)
router.post('/delete', roleMiddleware(['ADMIN']), controller.deleteArticle)
router.post('/banned', roleMiddleware(['ADMIN']), controller.banned)
module.exports = router
