const DB = require("../facades");
const bcrypt = require("bcrypt")
let {getClient} = require("../database").getClient

async function index (req, res){
    try {
        const deps = await DB.collection("departements").find({}).toArray();
        res.send(deps);
    } finally {
        //getClient().close()
    }
}

async function insert(req, res){
    try {
        const dep = await DB.collection("departements").insertOne(req.body);
        console.log(dep);
        res.send(dep)
    } finally {
        //getClient().close()
    }
}

async function register(req, res){
    try {
        const {email, password} = req.body

        const user = await DB.collection("users").findOne({"email":email})
        
        console.log(user);
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {index, insert, register}