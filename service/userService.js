require("dotenv").config();
const Users = require("../model/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uploadToCloudinary = require("./uploadService");

const salt = bcrypt.genSaltSync(10);

const checkEmail = async (email) => {
  try {
    let user = await Users.findOne({ email: email });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

const loginService = async (email, password) => {
  try {
    // fetch user by email
    let user = await Users.findOne({ email: email });
    if (user) {
      // compare password
      const isMatchPass = await bcrypt.compare(password, user.password);
      if (!isMatchPass) {
        return {
          status: 200,
          EM: "nvalid Email/Password",
        };
      } else {
        // Create a access token
        const payload = {
          email: user.email,
          password: user.password,
        };
        const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPRIE,
        });
        return {
          access_token,
          user: {
            email: user.email,
            password: user.password,
          },
        };
      }
    } else {
      return {
        status: 500,
        user: null,
        message: "Internal Server Error",
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const hashPassword = async (password) => {
  try {
    const hashPass = await bcrypt.hashSync(password, salt);
    return hashPass;
  } catch (error) {
    console.log(error);
  }
};

const registerService = async (data, avatarPath) => {
  try {
    let check = await checkEmail(data.email);
    if (check === true) {
      return {
        status: 400,
        message: "Your email is already in user, Please try",
      };
    } else {
      let hashPassFrom = await hashPassword(data.password);
      // let avatarUrl = "";
      // if (avatarPath) {
      //   avatarUrl = await uploadToCloudinary(avatarPath); // Gọi upload ảnh
      // }
      let result = await Users.create({
        name: data.name,
        email: data.email,
        password: hashPassFrom,
        phone: data.phone,
        address: data.address,
        avatar: data.avatar,
      });
      return {
        status: 200,
        message: "Create Success",
        result,
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllUser = async () => {
  try {
    let result = await Users.find({}).select("-password");
    return { status: 200, message: "Data success", result };
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, salt);
    let user = await Users.updateOne(
      { email: email },
      { $set: { password: hashedPassword } }
    );
    if (!user) {
      return "Người dùng không tồn tại";
    }
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  loginService,
  registerService,
  getAllUser,
  changePassword,
};
