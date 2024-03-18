const router = require("express").Router()
const { getErrorMessage } = require('../utils/errorUtils')
const userManager = require('../managers/userManager')
const { isGuest, isAuth } = require('../middlewares/authMiddleware')
const User = require("../models/User")

router.get('/register', isGuest, async (req, res) => {
    try {
        const user = await userManager.register();
        res.json(user);
    } catch (error) {
        console.error('Error fetching paintings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})




module.exports = router