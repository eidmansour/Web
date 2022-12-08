const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weekSchema = new Schema({

    title : {
        type: String , 
        requrie: true

    }, 

    video : {
        type : String , 
        require : true , 
    },
    videoDescription: {
        type : String , 
        required: true
    }


},{timestamps:true})

module.exports = mongoose.model('week' , weekSchema)