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

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getBusiness = async () => {
  try {
    let data = await Business.find({});

    return data;
  } catch (error) {
    console.log(error);
    return null;
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
    console.log(error);
    return null;
  }
};

module.exports = { createBusiness, getBusiness, updateBusiness };
