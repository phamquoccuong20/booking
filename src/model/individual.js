const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const indiviSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    description: { type: String },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // createAt, updateAt
  }
);

indiviSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Individual = mongoose.model("individual", indiviSchema);

module.exports = Individual;
