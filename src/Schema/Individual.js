const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const individualSchema = new Schema({

    username : {
        type : String , 
        required : true
    }, 
    
    email: {
        type :String , 
        required : true
    } , 
    
    password : {
        type : String , 
        required : true
    } ,
    role :{
        type :Number ,
        default:2
    
    }
    }, {timestamps:true} )

module.exports = mongoose.model('individual' , individualSchema)