const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({

    name: String,
    subjects: [{
        name: String,
        users: []

    }],
    users: []

},{timestamps: true});

module.exports = mongoose.model('Category', categorySchema);
