const Service = require("../model/service");

const createSer = async (data) => {
  try {
    let result = await Service.create({
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
    });

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getService = async () => {
  try {
    let data = await Service.find({});

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updateService = async (title, description, image) => {
  try {
    let data = await Service.updateOne(
      { title: title },
      { $set: { description, image } }
    );

    if (!data) {
      return "Dịch vụ không tồn tại";
    }

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { createSer, getService, updateService };
