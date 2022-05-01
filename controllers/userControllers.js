const { User, Thought } = require("../models");
const userControllers = {
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
  //gets one user by ID
  onlyOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("friends")
      .populate("thougths")
      .then((userinfo) => {
        if (!userinfo) {
          return res
            .status(404)
            .json({ message: "Not found user with this ID" });
        }
        res.json(userinfo);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
  updateUser(req, res) {
      
  },
  userDeleted(req, res) {},
};

module.exports = userControllers;
