const { Router } = require("express");
const { UserModel } = require("../Model/UserModel");

const UserDetails = Router();

UserDetails.get("/", async (req, res) => {
    const { page, limit, gender } = req.body;
    let ress = gender ? await UserModel.find({ gender: gender }).skip((page - 1) * limit).limit(limit) : await UserModel.find({}).skip((page - 1) * limit).limit(limit)
    console.log(ress)
    console.log(ress.length);
    res.send(ress);
})

module.exports = { UserDetails }