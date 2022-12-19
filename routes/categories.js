var express = require('express');
var router = express.Router();

/* GET users listing. */
const{findAll,create,delete:remove,getACategorybyId,updateACategory}=require("../controllers/categories")

router.get('/', findAll);
router.get("/:id",getACategorybyId)
router.post('/',create)
router.delete('/:id',remove)
router.put("/:id",updateACategory)

module.exports = router;
