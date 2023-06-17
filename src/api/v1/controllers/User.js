// -----------Thired party libraries and modules-----
const bcrypt = require("bcrypt");

// -----------Custom libraries and modules-----------
const { UserModel } = require("../models");

// ------------Controller Functions------------
//-------User Registration-----------
const UserRegister = async (req, res) => {
  console.log(req.body);
  // Request Body
  const {
    fullName,
    emailAddress,
    password,
    phoneNumber,
    gender,
    userType,
    dateCreated,
    timeCreated,
  } = req.body;

  // check if email or phone number already exist
  const user = await UserModel.findOne({
    $or: [{ emailAddress }, { phoneNumber }],
  }).exec();

  if (user) {
    return res.status(400).json({
      status: false,
      error: {
        message: "Email or phone number already exist!",
      },
    });
  }

  //   Password hashing
  const hashedPasswerd = await bcrypt.hash(password, 8);

  //New user
  const newUser = new UserModel({
    fullName,
    emailAddress,
    password: hashedPasswerd,
    phoneNumber,
    gender,
    userType,
    dateCreated,
    timeCreated,
  });

  try{
    const savedUser = await newUser.save();
    return res.status(201).json({
        status: true,
        user: savedUser,
        success:{
            message:"Successfuly registered a new user"
        }
    })
  }catch(err){
    console.log(err);
    return res.status(500).json({
        status: false,
        error:{
            message: "Failed to registered a new user"
        }
    })
  }
};

module.exports = { UserRegister };
