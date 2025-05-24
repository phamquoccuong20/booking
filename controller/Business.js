const businessService = require("../service/businessService");

const createBusiness = async (req, res) => {
  try {
    let { name, address, description, image, rating } = req.body;

    const data = { name, address, description, image, rating };
    let business = await businessService.createBusiness(data);
    return res.status(200).json({ errcode: 0, data: business });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};

const getAllBusiness = async (req, res) => {
  try {
    const data = await businessService.getBusiness();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};
const updateBusiness = async () => {};
const getByIdBusiness = async () => {};

module.exports = {
  createBusiness,
  getAllBusiness,
  updateBusiness,
  getByIdBusiness,
};
