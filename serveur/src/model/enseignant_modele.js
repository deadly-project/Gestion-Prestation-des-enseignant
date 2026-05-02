import mongoose from "mongoose"

const enseignant_schema = new mongoose.Schema({
    Id_enseignant: {type: String, required:true},
    Id_compte: {type: String, required:true},
    Nom: {type: String, required:true},
    Prenom: {type: String, required:true},
    Poste: {type: String, required:true},
    Taux_horaire: {type: Entier , required:true}
});
const Enseignant = mongoose.model("enseignant", enseignant_schema);
export default Enseignant;