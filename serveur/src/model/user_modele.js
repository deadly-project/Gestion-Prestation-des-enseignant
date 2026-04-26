import {mongoose} from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    mdp: {type: String, required: true},
    id:{type: String, required: true},
    role:{type:String, required:true},
    avatar: {type: String, required:true}
})
const User = mongoose.model('User', userSchema);
export default User;
