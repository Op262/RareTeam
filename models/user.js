const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    username:{ type:String, default:"", lowercase: true },
    password:{type: String, default:""},
    email:{ type: String, default:"", lowercase: true, unique: true },
    friend:[{
        type:Schema.Types.ObjectID, ref:"User"
    }],
    isAdmin: Boolean
})

module.exports = mongoose.model("User", userSchema);