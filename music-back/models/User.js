import { Schema, model } from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';

const UserSchema = new Schema({
    user_name: {
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 20,
    },
    user_email: {
        type: String,
        // match: [
        //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        // ],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
        },
        required: [true, 'Please provide email'],
        maxlength: 20,
        unique: [true, 'Please provide unique email'],
    },
    user_password: {
        type: String,
        required: [true, 'Please provide password'],
        // maxlength: 20,
    },
    user_roles: {
        User: {
            type: String,
            default: 'user'
        },
        Admin: String
    },
    // verificationToken: String,
    user_passwordToken: {
        type: String,
    },
    user_refreshToken: {
        type: String,
    },
    // passwordTokenExpirationDate: {
    //     type: Date,
    // },
});

// UserSchema.pre('save', async function() {
//     if (!this.isModified('password')) return;
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// UserSchema.methods.createJWT = function () {
//   return jwt.sign(
//     { userID: this._id, name: this.name },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: process.env.JWT_LIFETIME,
//     }
//   );
// };

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcryptjs.compare(candidatePassword, this.password);
    return isMatch;
};

export default model('User', UserSchema);
