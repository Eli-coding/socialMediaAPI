const router = require("express").Router();

const {
  createUser,
  getallUsers,
  onlyOneUser,
  updateUser,
  userDeleted,
} = require("../../controllers/userControllers.js");

// /api/user
router.route("/").get(getallUsers).post(createUser); 

// /api/user/:userId
router.route("/:userId").get(onlyOneUser).put(updateUser).delete(userDeleted);

// /api/user/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;


//learning purposes
//don't repeat yourself when writing code
// router.route("/:userId").get(onlyOneUser);
// router.route("/:userId").put(updateUser);
// router.route("/:userId").delete(userDeleted);
//children of router.route, not interactiong between each other. 