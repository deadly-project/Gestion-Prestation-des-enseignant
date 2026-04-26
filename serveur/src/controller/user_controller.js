import User from "../model/user_modele.js";

export async function createUser(req, res) {
    const user = await User.create(req.body)
    console.log(user);
    res.status(200).json({message:"Compte créer avec succès", data:user});
}
export async function getUser(req, res){
    const user = await User.find();
    console.log(user);
    res.json({data:user});
}
export async function searchUser(req, res) {
    const user = await User.findById(
        req.params.id,
    )
    console.log(user);
    res.status(200).json({message:"Resultat trouvé", data:user});
}

