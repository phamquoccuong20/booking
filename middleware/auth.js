const HttpError = require("../utils/Heper");

// Middleware 404

const notFound = (req, res, next) => {
  next(new HttpError(404, "Không tìm thấy đường dẫn"));
};

// Middleware xử lý lỗi tổng quát
const errorHandler = (err, req, res, next) => {
  console.error("Lỗi:", err.message);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Đã xảy ra lỗi nội bộ",
  });
};

module.exports = { notFound, errorHandler };
