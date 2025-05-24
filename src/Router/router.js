const express = require("express");
const usersAPI = require("../controller/userController");
const serviceController = require("../controller/serviceController");
const categoryController = require("../controller/categoryController");
const Business = require("../controller/Business");
const routerAPI = express.Router();

// API login
routerAPI.post("/login", usersAPI.handleLogin);
routerAPI.post("/register", usersAPI.handleRegister);

// API Users
routerAPI.get("/users", usersAPI.getUsers);
routerAPI.put("/update", usersAPI.changePass);

// API Service
routerAPI.post("/services", serviceController.createService);
routerAPI.get("/services", serviceController.getAllService);
routerAPI.put("/services", serviceController.updateService);

// API Category
routerAPI.post("/categories", categoryController.createCategory);
routerAPI.get("/categories", categoryController.getAllCategory);
routerAPI.put("/categories", categoryController.updateCategory);
routerAPI.get("/categories/:id", categoryController.getByIdCategory);

// API Business
routerAPI.post("/business", Business.createBusiness);
routerAPI.get("/business", Business.getAllBusiness);
routerAPI.put("/business", Business.updateBusiness);
routerAPI.get("/business/:id", Business.getByIdBusiness);

module.exports = routerAPI;
