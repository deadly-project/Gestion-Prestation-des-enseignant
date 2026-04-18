import {mongoose} from 'mongoose'

const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion avec MongoDB:'));
db.once('open', () => {
  console.log('Connexion à MongoDB réussie');
});


const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    mdp: {type: String, required: true}
})
const User = mongoose.model('User', userSchema);
export default User;
