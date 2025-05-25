const serService = require("../service/serService");

const createService = async (req, res) => {
  try {
    let { title, description, image, price, rating } = req.body;

    const data = { title, description, image, price, rating };
    let service = await serService.createSer(data);
    return res
      .status(200)
      .json({ status: 200, message: "Create Success", data: service });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};

const getAllService = async (req, res) => {
  try {
    const data = await serService.getService();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};

const updateService = async (req, res) => {
  try {
    let { title, description, image } = req.body;
    const data = await serService.updateService(title, description, image);
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

module.exports = { createService, getAllService, updateService };
