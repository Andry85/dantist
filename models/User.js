const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
}
    
);

module.exports = mongoose.model("User", UserSchema);