import User from "../model/testmodel.js";

export async function createUser(req, res) {
    const {username, mdp} = new User(req.body)
    console.log(username, mdp);
    //await user.save();
    //res.status(200).json({message: user});
}