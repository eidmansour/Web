const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;

const CouseSchema = new Schema({

Title : {
    type : String, 
    required: true, 
},
Subtitles: {
    type : mongoose.Schema.Types.ObjectId, 
    required :false, 
    ref : 'subTitle'

},

Rating : {
    type : String, 
    required: false,
    default : "Not Rated Yet"
    
}, 

TotalHours : {
    type : Number, 
    required : true
}, 

Price : {
    type : Number, 
    required : true
}, 

Subject : {
    type : mongoose.Schema.Types.ObjectId, 
    required : true,
    ref:'courseSubject'
} ,
ShortSummary: {
    type : String, 
    require: true
}, 
instructor :{
    type : mongoose.Schema.Types.ObjectId, 
    ref :'instructor', 
    
}
} , {timestamps:true})

module.exports = mongoose.model("courses" , CouseSchema)

