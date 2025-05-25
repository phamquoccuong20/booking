const Business = require("../model/business");

const createBusiness = async (data) => {
  try {
    let result = await Business.create({
      name: data.name,
      address: data.address,
      description: data.description,
      image: data.image,
      rating: data.rating,
    });

    return { status: 200, message: "Create business success", result };
  } catch (error) {
    return {
      status: 500,
      result: null,
      message: "Internal Server Error",
    };
  }
};

const getBusiness = async () => {
  try {
    let data = await Business.find({}).sort({ rating: -1 });

    return { status: 200, message: "Success", data };
  } catch (error) {
    return {
      status: 500,
      data: null,
      message: "Internal Server Error",
    };
  }
};

const updateBusiness = async (name, description, image, rating) => {
  try {
    let data = await Business.updateOne(
      { name: name },
      { $set: { description, image, rating } }
    );

    if (!data) {
      return "Business không tồn tại";
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

const getByIdBusiness = async (id) => {
  try {
    let data = await Business.findById(id);

    return data;
  } catch (error) {
    return {
      status: 500,
      data: null,
      message: "Internal Server Error",
    };
  }
};

module.exports = {
  createBusiness,
  getBusiness,
  updateBusiness,
  getByIdBusiness,
};
