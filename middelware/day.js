
const day = (req, res, next) => {
    let today = new Date()
   
    if(today !== day){
        res.status(401).end()
    }else {
        next()
    }
}

module.exports = day