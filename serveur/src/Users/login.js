import User from "../model/user_modele.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"

// authentification de l'utilisateur
export async function Authentification(req, res) {

    try {

        console.log("username : " + req.body.username);

        const { username, password } = req.body;

        // IMPORTANT : await
        const user = await User.findOne({ username });

        console.log("recherche");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Vérification mot de passe
        const valid = await bcrypt.compare(
            password,
            user.password
        );

        if (!valid) {
            return res.status(401).json({
                message: "Mot de passe erroné"
            });
        }

        // Génération token
        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        console.log("post authentification");

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                fullname: user.fullname,
                role: user.role
            }
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

}
