const mongoose=require("mongoose");

//Building Schema as per user details 
const UserSchema=mongoose.Schema({
    gender:{type:String},
    name:{ title: String,  first: String, last: String},
    location:{ street: {number:String,name:String},city:String,state:String,country:String,postcode:String,coordinates:{latitude:String,longitude:String},timezone:{offset:String,description:String}},
    email:{type:String},
    login:{uuid:String,username:String,password:String,salt:String,md5:String,sha1:String,sha256:String},
    dob:{date:String,age:String},
    registered:{date:String,age:String},
    phone:{type:String},
    cell:{type:String},
    picture:{large:String,medium:String,thumbnail:String},
    nat:{type:String}
})

const UserModel=mongoose.model("fetcheduser",UserSchema);
//Building Model and Adding Collection Name.

module.exports={UserModel}
