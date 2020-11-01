const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type:String,
        minlength: [2, "Please use a name of at 2 characters"],
        required: [
            true,
            "Please provide a name for your expense."
        ]
    },
    planned: {
        type:Number,
        minlength: [1]
    },
    monthId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Month"
    }
})          

module.exports.Category = mongoose.model('Category', CategorySchema);