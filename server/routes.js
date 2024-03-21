const router = require('express').Router()


// const castController = require("./controllers/castController")
const userController = require('./controllers/userController')
const paintingController = require('./controllers/paintingController')


router.use(paintingController)
router.use('/auth', userController)

router.get('*', (req,res) => {
    // res.redirect('/404')
})

module.exports = router