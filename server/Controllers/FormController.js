const formModel = require("../Models/FormModel");

const addForm = async (req, res) => {
    try {
        const newForm = await formModel.insertMany(req.body);
        res.json(newForm).status(201);
    }
    catch (error) {
        res.status(500).json({ error })
    }

}


module.exports = {
    addForm,
}