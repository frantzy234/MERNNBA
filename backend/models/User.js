const mongoose = require('mongoose');
const { Schema } = mongoose;


// User Schema
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true, 
    },
    password: {
        type: String,
        required: true, 
    }
}, {
    timestamps: true, 
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password; 
            return ret;
        }
    }
});




const UserModel = mongoose.model("User", userSchema);


module.exports = UserModel;
