const individualSer = require("../service/indiService");

const createIndividuals = async (req, res) => {
  try {
    let { name, businessId, address, description, image, rating } = req.body;

    const data = { name, businessId, address, description, image, rating };

    let individual = await individualSer.createIndivid(data);
    return res
      .status(200)
      .json({ status: 200, message: "Create Success", data: individual });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};
const getAllIndividuals = async (req, res) => {
  try {
    const data = await individualSer.getIndivid();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Bad Request",
    });
  }
};
const updateIndividuals = async (req, res) => {
  try {
    let { name, description, image } = req.body;
    const data = await individualSer.updateIndivid(name, description, image);
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
const getByIdIndividuals = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await individualSer.getByIdIndivid(id);
    if (!data) {
      return res.status(404).json({ message: "Không tìm thấy Individual" });
    }
    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ status: 400, data: {}, message: "Bad Request" });
  }
};

module.exports = {
  createIndividuals,
  getAllIndividuals,
  updateIndividuals,
  getByIdIndividuals,
};
