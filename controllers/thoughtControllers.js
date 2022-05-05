const { User, Thought } = require("../models");
const thoughtControllers = {
  //get all thoughts
  getallThought(req, res) {
    Thought.find()
      .sort({ createdAt: -1 })
      .then((thoughtinfo) => {
        res.json(thoughtinfo);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  //create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughtinfo) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thoughtinfo._id } },
          { new: true }
        );
      })
      .then((thoughtinfo) => {
        if (!thoughtinfo) {
          return res
            .status(404)
            .json({
              message: "New thought created but no user found with this id.",
            });
        }
        res.json({ message: "New thought created successfully." });
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  // get one thought by id
  onlyOneThought(req, res) {
    Thought.findOne({ _id: req.params.userId })
      .then((thoughtinfo) => {
        if (!thoughtinfo) {
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

  //update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughtinfo) => {
        if (!thoughtinfo) {
          return res.status(404).json({ message: "No thought with this id" });
        }
        res.json(thoughtinfo);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //delete a thought
  thoughtDeleted(req, res) {},

  //add a new reaction
  addReaction(req, res) {},

  //delete a reaction
  deleteReaction(req, res) {},
};

module.children = thoughtControllers;
