const mongoose = require("mongoose");
const ratingSchema = require("./rating").schema;
const mongoose_delete = require("mongoose-delete");

const indiviSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "business",
      required: true,
    },
    rating: [ratingSchema],
    description: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // createAt, updateAt
  }
);

indiviSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Individual = mongoose.model("individual", indiviSchema);

module.exports = Individual;
