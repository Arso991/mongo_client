const secret = require("../config/secret")

const authentification = (req, res, next) => {
    const authheader = req.headers.authorization;
    if(!authheader){
        res.setHeader("WWW-Authenticate", "Basic realm='mon site à moi', charset='UTF-8'")
        res.status(401).end()
    } else {
        const credentials = new Buffer.from(authheader.split(' ')[1], "base64").toString()
        const [user, password] = credentials.split(':')
        if(user == secret.username && password == secret.password){
            next()
        }else{
            res.setHeader("WWW-Authenticate", "Basic realm='mon site à moi', charset='UTF-8'")
            res.status(401).end()
        }
    }
}

module.exports = authentification