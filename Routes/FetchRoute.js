const { default: axios } = require("axios");
const { Router } = require("express");
const { UserModel } = require("../Model/UserModel");

const FetchUser = Router();

FetchUser.get("/", async (req, res) => {
    let isPresent = await UserModel.find({});
    if (isPresent.length > 0) {
        res.send("Users Allready Fetched");
        //validating data is present or not.
    }
    else {
        //Fetching Users and Storing in Data Base.
        var Data
        await axios.get("https://randomuser.me/api/?results=50")
            .then((res) => {
                Data = res.data.results;
            })
            .catch((err) => {
                console.log("error in fetching the data");
            })
        await UserModel.insertMany(Data)

        res.send("Fetched The Users And Saved In Data Base Successfully");
    }

})
module.exports = { FetchUser }