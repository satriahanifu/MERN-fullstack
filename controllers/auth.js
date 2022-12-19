require("dotenv").config
const {JWT_SECRET}=process.env
const jwt = require("jsonwebtoken")
const  UserModel  = require("../models");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  try {
    const { name, phoneNumber, email, userName, password } = req.body;

    const existCheck = await User.findOne({name});

    if (existCheck) {
      throw new Error(`User ${name} sudah digunakan`);
    }

    const newUser = new UserModel({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        userName:userName,
        password: bcrypt.hashSync(password, 12),
      })
    const data = await newUser.save();

    if (!data) {
      throw new Error("gagal registrasi user baru");
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { name, password } = req.body;

    const existCheck = await UserModel.findOne({
      where: { name },
    });

    if (!existCheck) {
      throw new Error(`user ${name} tidak terdaftar`);
    }

    const pwdCheck = await bcrypt.compare(password, existCheck.password);

    if (!pwdCheck) {
      throw new Error("error!, password salah");
    }

    const accessToken = jwt.sign(
      {
        name: existCheck,
      },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(201).json({
      status: true,
      data: {
        token: accessToken,
        name: existCheck,
      },
    });
  } catch (err) {
    next(err);
  }
};