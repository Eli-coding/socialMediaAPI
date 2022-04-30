const { User, Thought } = require("../models");
const userControllers = {
  createUser(req, res) {
    User.create(req.body)
      .then((userinfo) => {
        res.status(200).json(userinfo);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getallUsers(req, res) {
    User.find().then((userinfo) => res.json(userinfo));
  },


  
  onlyOneUser(req, res) {},
  updateUser(req, res) {},
  userDeleted(req, res) {},
};

module.exports = userControllers;
