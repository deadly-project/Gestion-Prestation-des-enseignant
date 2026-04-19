import User from "../model/testmodel.js";

export async function createUser(req, res) {
    const user = new User(req.body)
    console.log(user);
    await user.save();
    res.status(200).json({message: user});
}