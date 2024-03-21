const jwt = require("../lib/jwt")
const { SECRET } = require("../config/config")

exports.auth = async (req, res, next) => {
    // get token
    const token = req.cookies["auth"]
    
    if(!token){
        return next()
    }

    // validate token
try{
    const decodedToken = await jwt.verify(token, SECRET)
    req.user = decodedToken 
    res.locals.isAuthenticated = true
    res.locals.user = decodedToken
    next()
}catch{
    res.clearCookie("auth");

}
    
}

//check if the user is authorized

exports.isAuth = (req, res, next) => {
    if (!req.user) {
       return 
    }

    next()
}

exports.isGuest = (req, res, next) => {
    if (req.user) {
       return res.redirect('/')
    }

    next()
}

// exports.isOwner = async (req, res, next) => {
//     const painting = await paintingManager.getOne

//     next()
// }
