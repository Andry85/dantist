const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Slider", SliderSchema);