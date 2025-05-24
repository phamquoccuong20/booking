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

module.exports = { createBusiness };
