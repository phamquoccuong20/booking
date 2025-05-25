const businessService = require("../service/businessService");

const createBusiness = async (req, res) => {
  try {
    let { name, address, description, image, rating } = req.body;

    const data = { name, address, description, image, rating };
    let business = await businessService.createBusiness(data);
    return res.status(200).json(business);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};

const getAllBusiness = async (req, res) => {
  try {
    const data = await businessService.getBusiness();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};
const updateBusiness = async (req, res) => {
  try {
    let { name, description, image, rating } = req.body;
    const data = await businessService.updateBusiness(
      name,
      description,
      image,
      rating
    );
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};
const getByIdBusiness = async (req, res) => {
  try {
    let id = req.params.id;
    let bunisess = await businessService.getByIdBusiness(id);
    if (!bunisess) {
      return res.status(404).json({ message: "Không tìm thấy bunisess" });
    }
    return res.status(200).json(bunisess);
  } catch (error) {
    res.status(400).json({ status: 400, data: {}, message: "Bad Request" });
  }
};

module.exports = {
  createBusiness,
  getAllBusiness,
  updateBusiness,
  getByIdBusiness,
};
