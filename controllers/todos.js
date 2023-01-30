const todo = require("../models/todos");
const cate = require("../models/categories");

exports.create = async (req, res, next) => {
  try {
    // const tId = req.params["tid"];
    const cId = req.params["cid"];
    const { body, status, category } = req.body;
    // const data = new todo({body,status,category})

    //check cate ada apa tidak
    const cateCheck = cate.findById(cId, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Result : " + docs);
      }
    });

    if (cateCheck) {
      //jika ada
      //ambil data dari exist check
      //masukkan data dalam ID tsb
      // const saveCategory = todo.category.findOne(cateCheck);

      //simpan data di todo
      const data = new todo({
        body: body,
        status: status,
        category: cateCheck,
      });

      res.json({
        message: "saved without create new category",
        data,
      });
    } else {
      //buat kategory baru
      const newCate = cate.push(category);
      const save = new todo({
        body: body,
        status: status,
        category: newCate,
      });

      res.json({
        message: "saved with new category",
        save,
      });
    }
  } catch (error) {
    next(error);
  }
};
