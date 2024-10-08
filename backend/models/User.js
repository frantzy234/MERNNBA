const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const SALT_ROUNDS = 6;
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

// // Hash the password before saving
// userSchema.pre('save', async function(next) {
//     // 'this' is the user doc
//     if (!this.isModified('password')) return next();
    
//     try {
//         // Update the password with the computed hash
//         this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
//         return next();
//     } catch (error) {
//         return next(error);
//     }
// });







const UserModel = mongoose.model("User", userSchema);


module.exports = UserModel;
