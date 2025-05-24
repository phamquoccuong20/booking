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
const updateBusiness = async (req, res) => {
  try {
    let { name, description, image, rating } = req.body;
    const data = await businessService.updateBusiness(
      name,
      description,
      image,
      rating
    );
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};
const getByIdBusiness = async () => {
  try {
    let id = req.params.id;
    let categories = await categoryService.getByIdCategory(id);
    if (!categories) {
      return res.status(404).json({ message: "Không tìm thấy user" });
    }
    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

module.exports = {
  createBusiness,
  getAllBusiness,
  updateBusiness,
  getByIdBusiness,
};
