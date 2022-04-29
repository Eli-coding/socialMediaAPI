const router = require("express").Router();

const {
  createUser,
  getallUsers,
  onlyOneUser,
  updateUser,
  userDeleted
} = require("../../controllers/userControllers.js");

//create user
router.route("/").get(getallUsers).post(createUser);

//
router.route('/:userId').get(onlyOneUser).put(updateUser).delete(userDeleted);

module.exports = router;
