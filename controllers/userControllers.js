const {User,Thought} = require("../models");
const userControllers = {
    createUser(req,res){
        User.create(req.body).then( (userinfo)=>{
           res.status(200).json(userinfo)
        }).catch( (err)=>{
            res.status(500).json(err)
        })
    },
    //getallUsers();
}

module.exports = userControllers; 

// TO DO: create routes and update controllers