var express = require('express');
var router = express.Router();

/* GET users listing. */
const{findAll,create,delete:remove,getUserbyId,updateAUser}=require("../controllers/users")

router.get('/', findAll);
router.get("/:id",getUserbyId)
router.post('/',create)
router.delete('/:id',remove)
router.put("/:id",updateAUser)

module.exports = router;
