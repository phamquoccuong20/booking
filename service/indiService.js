const Individuals = require("../model/individual");

const createIndivid = async (data) => {
  try {
    let result = await Individuals.create({
      name: data.name,
      businessId: data.businessId,
      address: data.address,
      description: data.description,
      image: data.image,
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

const getIndivid = async () => {
  try {
    let data = await Individuals.find()
      .populate("businessId")
      .sort({ rating: -1 });

    return data;
  } catch (error) {
    return {
      status: 500,
      data: null,
      message: "Internal Server Error",
    };
  }
};

const updateIndivid = async (name, description, image) => {
  try {
    let data = await Individuals.updateOne(
      { name: name },
      { $set: { description, image } }
    );

    if (!data) {
      return "Không tồn tại";
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

const getByIdIndivid = async (id) => {
  try {
    let data = await Individuals.findById(id).populate("businessId");

    return data;
  } catch (error) {
    return {
      status: 500,
      data: null,
      message: "Internal Server Error",
    };
  }
};

module.exports = { createIndivid, getIndivid, updateIndivid, getByIdIndivid };
