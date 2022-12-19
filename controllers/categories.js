const CategoryModel = require("../models/categories")

exports.findAll = async (req,res,next) =>{
    try{
        const data = await CategoryModel.find({}).sort({ createdAt: -1 });
        res.json({
            message:"getting all categories",
            data:data,
        })

        if(!data){
            throw new Error("gagal mengambil data categories")
        }
    } catch (error){
        res.status(500).json({ error: error.message })
    }

    // CategoryModel.find({},(err,result) =>{
    //     if(err){
    //         res.json(err)
    //     }else{
    //         res.json(result)
    //     }
    // })
}

exports.create= async (req,res,next) =>{
try{
    const{body}=req.body
    const newCategory = new CategoryModel ({body})
    const data = await newCategory.save()

    if(!data){
        throw new Error("gagal menambahkan category")
    }
    res.json(data)
    }catch(error){
        next(error)
    }
    // const user =req.body
    // const newTodo = new CategoryModel(user)
    // await newTodo.save()

    // res.json(user)
}


exports.delete = async (req, res) => {
    try {
      const { id: categoryId } = req.params;
      const user = await CategoryModel.findByIdAndDelete(categoryId);
  
      if (!CategoryModel) {
        return res.status(404).json({ msg: `No users with id: ${categoryId}` });
      } else {
        res.status(200).json({
          message: `users with id: ${categoryId} deleted successfully.`,
          CategoryModel: CategoryModel,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getACategorybyId = async (req, res) => {
    try {
      const { id: categoryId } = req.params;
      const category = await CategoryModel.findOne({ _id: categoryId });
  
      if (!CategoryModel) {
        return res.status(404).json({ msg: `No category with id: ${categoryId}` });
      } else {
        res.status(200).json({
          message: "Get a Category successfully.",
          category: category,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}


exports.updateACategory = async (req, res) => {
    try {
      const { id: categoryId } = req.params;
      const category = await CategoryModel.findByIdAndUpdate(categoryId, req.body);
  
      if (!category) {
        return res.status(404).json({ msg: `No user with id: ${categoryId}` });
      } else {
        res.status(200).json({
          msg: `user with id: ${categoryId} updated successfully.`,
          category: category,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  