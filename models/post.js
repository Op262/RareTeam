const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// post Schema
const postSchema = new mongoose.Schema({
    name1:{type: String, default:""},
   q11:{type: String, default:""},
   q21:{type: String, default:""},
   dsnm1:{type: String, default:""},
   season1:{type: String, default:""},
   q31:{type: String, default:""},
   epic1:{type: String, default:""},
   rc1:{type: String, default:""},
    // Array of sub-documents
    comments:[{
        commenter: String, //
        content: { type: String, default:"" },
    }],
    // Store in Object ID of a user model
    //author:{ type:Schema.Types.ObjectID, ref:"User" },
    //_id bu default is instead
    result:{type:String, default:""},
   })


module.exports = mongoose.model("Post", postSchema);