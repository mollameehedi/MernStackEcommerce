const mongoose = require('mongoose');

const {Schema} = mongoose;

const categorySchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    isActive:{
        type:Boolean,
        default:false,
    },
    
  ownerid:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  }
});

module.exports = mongoose.model('Category',categorySchema);