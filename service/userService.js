require("dotenv").config();
const Users = require("../model/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);

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

const registerService = async (userData) => {
  try {
    let hashPassFrom = await hashPassword(userData.password);
    let result = await Users.create({
      name: userData.name,
      email: userData.email,
      password: hashPassFrom,
      phone: userData.phone,
      address: userData.address,
    });

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllUser = async () => {
  try {
    let result = await Users.find({}).select("-password");
    return result;
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
