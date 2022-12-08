const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subTitleSchema = new Schema ({

    weekOne :{
        type : mongoose.Schema.Types.ObjectId, 
    required : true,
    ref:'week'}, 
    weekTwo :{
        type : mongoose.Schema.Types.ObjectId, 
    required : true,
    ref:'week'},

    weekThree :{
        type : mongoose.Schema.Types.ObjectId, 
    required : true,
    ref:'week'},

    weekFour :{
        type : mongoose.Schema.Types.ObjectId, 
    required : true,
    ref:'week'},





}, {timestamps:true})

module.exports = mongoose.model('subTitle' , subTitleSchema)