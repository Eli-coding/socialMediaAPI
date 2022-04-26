const router = require ('express').Router();


const {createUser} = require ("../controllers/userControllers.js")


router.route("/api/users/").post(createUser)
module.exports = router; 

