import User from "../model/user_modele.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res) {
    console.log(req.body)
    try{
        const {nom, prenom, username, password} = req.body;
        console.log(nom, prenom, username, password);
        
        const passwordHashed = bcrypt.hash(password, 10);
        const fullname = `${nom} ${prenom}`;

        const newUser = new User({
            fullname,
            username,
            passwordHashed,
            role:"user"
        })
        res.status(201).json({
            message:"Compte créer avec succès", 
            user:{
                id: newUser._id,
                username:newUser.username
            }});
    }catch(err){
        console.log(err);
        res.status(500).json("Erreur serveur");
    }
}
export async function getUser(req, res){
    const user = await User.find();
    console.log(user);
    res.json({user});
}
export async function searchUserById(req, res) {
    const user = await User.findById(
        req.params.id,
    )
    console.log(user);
    res.status(200).json({message:"Resultat trouvé", data:user});
}
export async function verifyUser(req, res){
    console.log("body : "+req.body.username)
    const user = await User.findOne({username: req.body.username})
    if(user){
        console.log('find')
        res.json({available:false, message:"Nom d' utilisateur déjà prise"})
    }else{
        console.log("not find")
        res.json({available:true, message:"Nom d'utilisateur parfait"})
    }
}

