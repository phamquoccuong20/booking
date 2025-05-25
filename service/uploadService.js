const { fileURLToPath } = require("url");
const cloudinary = require("../index");
const fs = require("fs");

const uploadToCloudinary = async () => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "avatar",
  });
  fs.unlinkSync(filePath);
  return result.secure_url;
};

module.exports = { uploadToCloudinary };
