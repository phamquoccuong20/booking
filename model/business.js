const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const ratingSchema = require("./rating").schema;


const businessSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    description: String,
    image: String,
    rating: [ratingSchema],
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // createAt, updateAt
  }
);

businessSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Business = mongoose.model("business", businessSchema);

module.exports = Business;
