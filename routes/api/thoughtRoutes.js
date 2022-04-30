const router = require("express").Router();

const {
  createThought,
  getallThought,
  onlyOneThought,
  updateThought,
  thoughtDeleted,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers.js");

// /api/thoughts
router.route("/").get(getallThought).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(onlyOneThought)
  .put(updateThought)
  .delete(thoughtDeleted);

// /api/thoughts/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// api/thoughts/:thoughtId/reactions/reactionId
router.route("/:thoughtId/reactions/reactionId").delete(deleteReaction);

module.exports = router;
