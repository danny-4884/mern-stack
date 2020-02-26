const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fName: {
        type: String,
        required:true
    },
    lName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required:true
    }
})
// eslint-disable-next-line no-undef
module.exports = User = mongoose.model('users', UserSchema);