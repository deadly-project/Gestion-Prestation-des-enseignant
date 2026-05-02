import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    role:{type:String, required:true},
    avatar: {type: String}
})
const User = mongoose.model('User', userSchema);
export default User;
