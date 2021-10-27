const express = require("express");
const FormRouter = express.Router();
const FormController = require("../Controllers/FormController")

FormRouter.post("/", FormController.addForm);



module.exports = FormRouter;