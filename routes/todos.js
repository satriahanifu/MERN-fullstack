var express = require("express");
var router = express.Router();

/* GET users listing. */
const { findAll, create, delete: remove, getATodobyId, updateATodo } = require("../controllers/todos");

// router.get("/", findAll);
// router.get("/:id", getATodobyId);
router.post("/:cid", create);
// router.delete("/:id", remove);
// router.put("/:id", updateATodo);

module.exports = router;
