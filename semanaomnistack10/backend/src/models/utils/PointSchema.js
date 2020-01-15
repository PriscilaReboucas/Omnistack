const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
 //codigo está na documentação do mongoose
    type:{
        type: String,
        enum:['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

module.exports = PointSchema;