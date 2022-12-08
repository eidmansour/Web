const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cortraineeSchema = new Schema ( { 

    Name : {
        type : String , 
        required : true
    }, 
    
    Email: {
        type :String , 
        required : true
    } , 
    
    Password : {
        type : String , 
        required : true 
    } ,
    Company : {
        type :String , 
        required : true
    }
    ,
    role :{
    type :Number ,
    default:4

    }
    }, {timestamps:true} )
    
    module.exports = mongoose.model("cortrainee",cortraineeSchema)