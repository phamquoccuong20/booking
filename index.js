require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dbzbbr0jd",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET, //
  // secure: true,
});

const url = cloudinary.url("cld-sample-5");
console.log(url);

module.exports = cloudinary;
