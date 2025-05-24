const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const ratingSchema = require("./rating").schema;

const serviceSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    description: String,
    rating: [ratingSchema],
    image: String,
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // createAt, updateAt
  }
);

serviceSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
