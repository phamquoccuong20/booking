const individualSer = require("../service/indiService");

const createIndividuals = async (req, res) => {
  try {
    let { name, businessId, address, description, image, rating } = req.body;

    const data = { name, businessId, address, description, image, rating };

    let individual = await individualSer.createIndivid(data);
    return res.status(200).json({ errcode: 0, data: individual });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};
const getAllIndividuals = async (req, res) => {
  try {
    const data = await individualSer.getIndivid();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};
const updateIndividuals = async (req, res) => {
  try {
    let { name, description, image } = req.body;
    const data = await individualSer.updateIndivid(name, description, image);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      data: {},
    });
  }
};
const getByIdIndividuals = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await individualSer.getByIdIndivid(id);
    if (!data) {
      return res.status(404).json({ message: "Không tìm thấy Individual" });
    }
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

module.exports = {
  createIndividuals,
  getAllIndividuals,
  updateIndividuals,
  getByIdIndividuals,
};
