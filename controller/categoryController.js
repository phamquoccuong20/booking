const categoryService = require("../service/categoryService");

const createCategory = async (req, res) => {
  try {
    let { name, description, image, serviceId } = req.body;

    const data = { name, description, image, serviceId };
    let categories = await categoryService.createCategory(data);
    return res
      .status(200)
      .json({ status: 200, message: "Create Success", data: categories });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const data = await categoryService.getCategory();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    let { name, description, image } = req.body;
    const data = await categoryService.updateCategory(name, description, image);
    return res
      .status(200)
      .json({ status: 200, message: "Update Success", data });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};

const getByIdCategory = async (req, res) => {
  try {
    let id = req.params.id;
    let categories = await categoryService.getByIdCategory(id);
    if (!categories) {
      return res.status(404).json({ message: "Không tìm thấy category" });
    }
    return res.status(200).json(categories);
  } catch (error) {
    res
      .status(400)
      .json({ status: 400, categories: {}, message: "Bad Request" });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  getByIdCategory,
};
