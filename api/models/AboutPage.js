const mongoose = require("mongoose");

const AboutPageSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    expirience: {
        type: String,
        required: false,
    },
    reviews: {
        type: String,
        required: false,
    },
}
    
);

module.exports = mongoose.model("AboutPage", AboutPageSchema);