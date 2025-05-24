const Category = require("../model/categogy");
const { eventNames } = require("../model/service");

const createCategory = async (data) => {
  try {
    let datas = await Category.create({
      name: data.name,
      description: data.description,
      image: data.image,
      service: data.service,
    });

    return datas;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getCategory = async () => {
  try {
    let data = await Category.find({});

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getByIdCategory = async (id) => {
  try {
    let data = await Category.findById(id);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (name, description, image) => {
  try {
    let data = await Category.updateOne(
      { name: name },
      { $set: { description, image } }
    );

    if (!data) {
      return "Danh mục không tồn tại";
    }

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createCategory,
  getByIdCategory,
  getCategory,
  updateCategory,
};
