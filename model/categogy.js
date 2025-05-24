const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const categorySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    image: String,
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service", // 👉 Kết nối với model
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // createAt, updateAt
  }
);

categorySchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
