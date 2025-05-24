const Category = require("../model/categogy");
const Service = require("../model/service");
const { eventNames } = require("../model/service");

const createCategory = async (data) => {
  try {
    let service = await Service.findOne({ title: data.serviceId });

    let datas = await Category.create({
      name: data.name,
      description: data.description,
      image: data.image,
      serviceId: service._id,
    });

    return datas;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getCategory = async () => {
  try {
    let data = await Category.find().populate("serviceId");

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
