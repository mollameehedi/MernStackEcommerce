const mongoose = require("mongoose");

const { Schema } = mongoose;

const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categoryid: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    ownerid:{
        type:mongoose.Types.ObjectId,
        ref:"User"
      },
    isActive: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);