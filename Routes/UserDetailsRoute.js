const { Router } = require("express");
const { UserModel } = require("../Model/UserModel");

const UserDetails = Router();

UserDetails.get("/", async (req, res) => {
    const {page,limit,gender } = req.query;
    console.log(page,limit,gender)
    const users = gender ? await UserModel.find({ gender: gender }).skip((page - 1) * limit).limit(limit) : await UserModel.find({}).skip((page - 1) * limit).limit(limit)
    console.log(users)
    console.log(users.length);
    res.send(users);
})

module.exports = { UserDetails }