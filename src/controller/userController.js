const userService = require("../service/userService");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await userService.loginService(email, password);
  return res.status(200).json(data);
};

const handleRegister = async (req, res) => {
  let { name, email, password, phone, address } = req.body;

  const data = { name, email, password, phone, address };

  let users = await userService.registerService(data);
  return res.status(200).json({ errcode: 0, data: users });
};

const getUsers = async (req, res) => {
  const data = await userService.getAllUser();
  return res.status(200).json(data);
};

const changePass = async (req, res) => {
  try {
    let { email, password } = req.body;
    let users = await userService.changePassword(email, password);
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json("Error Server");
  }
};

module.exports = {
  handleLogin,
  handleRegister,
  getUsers,
  changePass,
};
