const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const serviceSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    description: String,
    rating: { type: Number, min: 0, max: 5, default: 0 },
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
