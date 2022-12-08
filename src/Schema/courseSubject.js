const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouseSubjectSchema = new Schema({

subject : {

    type : String , 
    required:true,
}



}, {timestamps:true})

module.exports = mongoose.model("courseSubject" , CouseSubjectSchema)