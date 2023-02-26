const express = require("express");
const cors = require("cors");
const { Connection } = require("./Config/db");
const { FetchUser } = require("./Routes/FetchRoute");
const { DeleteUsers } = require("./Routes/DeleteRoute");
const { UserDetails } = require("./Routes/UserDetailsRoute");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 8500

//Fetching the users and storing in the data base.
app.use("/fetchusers", FetchUser);

//Deleting all users present in data base.
app.use("/deleteusers", DeleteUsers);

//Sending the required users to client side.
app.use("/userdetails", UserDetails)

app.listen(PORT, async () => {
    //catching the error while connecting to data base via try and catch.
    try {
        await Connection
        console.log("Connection to DB successfull");
    }
    catch (err) {
        console.log("error in connecting in db");
        console.log(err)
    }
    console.log(`Listening to Port ${PORT}`)
})