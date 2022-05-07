const { User, Thought } = require("../models");
const userControllers = {
  
  //gets all users
  getallUsers(req, res) {
    User.find()
      .then((userinfo) => {
        res.json(userinfo);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
  //gets a single user by its _id and populated thought and friend data
  onlyOneUser(req, res) {
    
    User.findOne({ _id: req.params.userId })

     .populate("friends")
    .populate("thoughts")
      .then((userinfo) => {
        
        if (!userinfo) {
          return res
            .status(404)
            .json({ message: "No user with this ID found" });
        }
        res.json(userinfo);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  //creates a user
  createUser(req, res) {
    User.create(req.body)
      .then((userinfo) => {
        res.status(200).json(userinfo);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  //Update a user by its _id
  updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId},
        {$set: req.body},
        {runValidators : true, new:true,}

      ).then((userinfo) =>{
        
        if(!userinfo){
          return res.status (404).json({message: 'No user with this ID found'});
        }
         res.json(userinfo);
      }).catch((error) =>{
        res.status(500).json(error); 
      });
  
},

//remove user by its _id
userDeleted(req, res) {

  User.findOneAndDelete({_id:req.params.userId})
  .then((userinfo) =>{
    if (!userinfo){
      return res.status(404).json({message:'No user with this ID found'});

    }
     return res.json(userinfo);
  }).catch((error) =>{
    res.status(500).json(error);
  });
},

// add friend for user
addFriend(req,res){
  User.findOneAndUpdate({_id:req.params.userId}, 
  {$push:{friends:req.params.friendId}}
  ,{new:true})
  .then ((userinfo) => {
    if(!userinfo){
      return res.status(404).json({message:'No user with this ID found'});
    }
    res.json(userinfo);

  }).catch((error) =>{
    console.log(error);
    res.status(500).json(error);
  });
},

//delete friend for user
removeFriend(req,res){
  User.findOneAndUpdate({_id:req.params.userId}, 
    {$pull:{friends:req.params.friendId}}
    ,{new:true})
    .then ((userinfo) => {
      if(!userinfo){
        return res.status(404).json({message:'No user with this ID found'});
      } res.json (userinfo);
    }) .catch ((error) =>{
      console.log(error);
      res.status(500).json(error);
    });
},

};


module.exports = userControllers;
