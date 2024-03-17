const router = require("express").Router()
const {getErrorMessage} = require('../utils/errorUtils')
const userManager = require('../managers/userManager')
const {isGuest, isAuth} = require('../middlewares/authMiddleware')

router.get('/register', isGuest, (req, res) => {
    res.render('/register')
})

router.post("/register", isGuest, async (req, res) => {
    const userData = req.body
    try {
        await userManager.register(userData)
        res.redirect("/login")
    } catch (error) {
        res.render('/register', { ...userData, error: getErrorMessage(error)})
    }
    
})


router.get('/login', isGuest, (req, res) => {
    res.render('/login')
})

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;
    try{
        const token = await userManager.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    }catch(error){
        const message = getErrorMessage(error)
        res.status(404).render('/login', {email, error: message})
    }
    
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
})



module.exports = router