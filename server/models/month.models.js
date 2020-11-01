const mongoose = require('mongoose');

const MonthSchema = new mongoose.Schema({
    name: {
        type:String
    }
});

module.exports.Month = mongoose.model('Month', MonthSchema);