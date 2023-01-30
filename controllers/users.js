const UserModel = require("../models/users");
const bcrypt = require("bcrypt");

exports.findAll = async (req, res, next) => {
  try {
    const data = await UserModel.find({}).sort({ createdAt: -1 });
    res.json({
      message: "getting all users",
      data: data,
    });

    if (!data) {
      throw new Error("gagal mengambil data user");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  // UserModel.find({},(err,result) =>{
  //     if(err){
  //         res.json(err)
  //     }else{
  //         res.json(result)
  //     }
  // })
};

exports.create = async (req, res, next) => {
  try {
    const { name, phoneNumber, email, userName, password, todos } = req.body;
    const newUser = new UserModel({ name, phoneNumber, email, userName, password: bcrypt.hashSync(password, 12), todos });
    const data = await newUser.save({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      userName: userName,
      password: bcrypt.hashSync(password, 12),
      todos: todos,
    });

    if (!data) {
      throw new Error("gagal menambahkan user");
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
  // const user =req.body
  // const newUser = new UserModel(user)
  // await newUser.save()

  // res.json(user)
};

exports.delete = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await UserModel.findByIdAndDelete(userId);

    if (!UserModel) {
      return res.status(404).json({ msg: `No users with id: ${userId}` });
    } else {
      res.status(200).json({
        message: `users with id: ${userId} deleted successfully.`,
        UserModel: UserModel,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserbyId = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await UserModel.findOne({ _id: userId });

    if (!UserModel) {
      return res.status(404).json({ msg: `No task with id: ${userId}` });
    } else {
      res.status(200).json({
        message: "Get a UserModel successfully.",
        user: user,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAUser = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await UserModel.findByIdAndUpdate(userId, req.body);

    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userId}` });
    } else {
      res.status(200).json({
        msg: `user with id: ${userId} updated successfully.`,
        user: user,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.postsByUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await UserModel.findById(id).populate("todos");

    res.json(data);
  } catch (error) {
    next(error);
  }
};
