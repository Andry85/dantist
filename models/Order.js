const mongoose = require("mongoose");

const Orderchema = new mongoose.Schema(
    {
       name: {
           type: String,
           required: true,
       },
       phone: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: false,
        },
        status: {
            type: String,
            required: false,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Order", Orderchema)