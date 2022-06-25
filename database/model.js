const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    rollnumber:{
        type:String,
        required:true
    },
    Adress:{
        type:String,
        required:true
    },
    Spot:{
        type:String,
        required:true
    }
})

const Form = new mongoose.model("form",schema);
module.exports = Form;