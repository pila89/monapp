const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  fullName: { type: String, required: true },
  address:  {
    type: String,
    max: 12
  },
  phone: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    max: 12,
    
    unique: true,  // ensure unique email
  
  },
  pwd: { type:String, required: true },
  image:{ type: String, required: true },
  role:{ type: String, required: true },
})
module.exports=mongoose.model("user",userSchema)
