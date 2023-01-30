var express = require("express");
var router = express.Router();

/* GET users listing. */
const { findAll, create, delete: remove, getById, updateById } = require("../controllers/categories");

router.get("/", findAll);
router.get("/:id", getById);
router.post("/", create);
router.delete("/:id", remove);
router.put("/:id", updateById);
// router.post("/:pid/:uid", create);

module.exports = router;
