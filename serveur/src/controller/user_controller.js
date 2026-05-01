import User from "../model/user_modele.js";

export async function createUser(req, res) {
    console.log(req.body)
    //const user = await User.create(req.body)
    //console.log(user);
    res.status(200).json({message:"Compte créer avec succès", data:user});
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
    console.log("body"+req.body.username)
    const user = await User.findOne({username: req.body.username})
    if(user){
        console.log('find')
        res.status(200).json({available:false})
    }else{
        console.log("not find")
        res.status(200).json({available:true})
    }
}

