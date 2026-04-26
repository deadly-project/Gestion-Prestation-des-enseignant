import {Enseignant} from "../model/enseignant_modele.js"

export async function createEnseignant(req, res){
    const enseignant = new Enseignant(req.body());
    console.log(enseignant)
    await enseignant.save()
    res.status(200).json({message:"Enseignant enregistrer avec succès", data:enseignant})
}