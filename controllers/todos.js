const TodoModel = require("../models/todos")

exports.findAll = async (req,res,next) =>{
    try{
        const data = await TodoModel.find({}).sort({ createdAt: -1 });
        res.json({
            message:"getting all todos",
            data:data,
        })

        if(!data){
            throw new Error("gagal mengambil data user")
        }
    } catch (error){
        res.status(500).json({ error: error.message })
    }

    // TodoModel.find({},(err,result) =>{
    //     if(err){
    //         res.json(err)
    //     }else{
    //         res.json(result)
    //     }
    // })
}

exports.create= async (req,res,next) =>{
try{
    const{body,status,category}=req.body
    const newTodo = new TodoModel ({body,status,category})
    const data = await newTodo.save()

    if(!data){
        throw new Error("gagal menambahkan user")
    }
    res.json(data)
    }catch(error){
        next(error)
    }
    // const user =req.body
    // const newTodo = new TodoModel(user)
    // await newTodo.save()

    // res.json(user)
}


exports.delete = async (req, res) => {
    try {
      const { id: todoId } = req.params;
      const user = await TodoModel.findByIdAndDelete(todoId);
  
      if (!TodoModel) {
        return res.status(404).json({ msg: `No users with id: ${todoId}` });
      } else {
        res.status(200).json({
          message: `users with id: ${todoId} deleted successfully.`,
          TodoModel: TodoModel,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getATodobyId = async (req, res) => {
    try {
      const { id: todoId } = req.params;
      const todo = await TodoModel.findOne({ _id: todoId });
  
      if (!TodoModel) {
        return res.status(404).json({ msg: `No task with id: ${todoId}` });
      } else {
        res.status(200).json({
          message: "Get a TodoModel successfully.",
          todo: todo,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}


exports.updateATodo = async (req, res) => {
    try {
      const { id: todoId } = req.params;
      const todo = await TodoModel.findByIdAndUpdate(todoId, req.body);
  
      if (!todo) {
        return res.status(404).json({ msg: `No user with id: ${todoId}` });
      } else {
        res.status(200).json({
          msg: `user with id: ${todoId} updated successfully.`,
          todo: todo,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  