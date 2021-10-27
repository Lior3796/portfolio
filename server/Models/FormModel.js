const mongoose = require("mongoose");
const joi = require("joi");
const joigoose = require("joigoose")("mongoose");
const mongooseSchema = mongoose.Schema;

const formSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    descripition: joi.string().required(),
})

const formModel = new mongooseSchema(
    joigoose.convert(formSchema)
);

module.exports = mongoose.model("form", formModel);