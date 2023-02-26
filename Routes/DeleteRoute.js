const { Router } = require("express");
const { UserModel } = require("../Model/UserModel");

const DeleteUsers = Router();

DeleteUsers.delete("/", async (req, res) => {
    await UserModel.deleteMany({});
    res.send("Deleted All Users Successfully");
})
module.exports = { DeleteUsers }