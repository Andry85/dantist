const mongoose = require("mongoose");

const IndexPageSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
}
    
);

module.exports = mongoose.model("IndexPage", IndexPageSchema);