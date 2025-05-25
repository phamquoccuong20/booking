const Service = require("../model/service");

const createSer = async (data) => {
  try {
    let result = await Service.create({
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      rating: data.rating,
    });

    return result;
  } catch (error) {
    return {
      status: 500,
      data: null,
      message: "Internal Server Error",
    };
  }
};

const getService = async () => {
  try {
    let data = await Service.find({}).sort({ rating: -1 });

    return data;
  } catch (error) {
    return {
      status: 500,
      data: null,
      message: "Internal Server Error",
    };
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
    return {
      status: 500,
      data: null,
      message: "Internal Server Error",
    };
  }
};

module.exports = { createSer, getService, updateService };
