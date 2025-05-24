const categoryService = require("../service/categoryService");

const createCategory = async (req, res) => {
  try {
    let { name, description, image, service } = req.body;

    const data = { name, description, image, service };
    let categories = await categoryService.createCategory(data);
    return res.status(200).json({ errcode: 0, data: categories });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const data = await categoryService.getCategory();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    let { name, description, image } = req.body;
    const data = await categoryService.updateCategory(name, description, image);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
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
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  getByIdCategory,
};
