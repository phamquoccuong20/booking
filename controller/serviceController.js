const serService = require("../service/serService");

const createService = async (req, res) => {
  try {
    let { title, description, image, price } = req.body;

    const data = { title, description, image, price };
    let service = await serService.createSer(data);
    return res.status(200).json({ errcode: 0, data: service });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};

const getAllService = async (req, res) => {
  try {
    const data = await serService.getService();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};

const updateService = async (req, res) => {
  try {
    let { title, description, image } = req.body;
    const data = await serService.updateService(title, description, image);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};

module.exports = { createService, getAllService, updateService };
