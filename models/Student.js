const mongoose = require("mongoose")
const validator = require("validator")
const studentSchema = new mongoose.Schema(
    {
        
        fname:  String,
        lname:String,
        email: {type: String,
            trim:true,
            lowercase:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is not valid!')
            }
        }}
    }
)
module.exports  =  mongoose.model("Student", studentSchema)
