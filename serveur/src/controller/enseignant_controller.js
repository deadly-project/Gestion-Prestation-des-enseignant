import Enseignant from "../model/enseignant_modele.js"

//CREATE
export const createEnseignant = async(req, res) => {
    console.log("create teacher")
    try {

            const newEns = new Enseignant(req.body);
    
            await newEns.save();
    
            res.status(201).json({message: "Enseignant crée ",data: newEns});
    
        } catch (err) {
    
            res.status(500).json({ message: err.message });
    
        }
}

//UPDATE
export const  UpdateEnseignant= async (req, res) =>{
    
        try {
    
            const updated = await Enseignant.findByIdAndUpdate(
                req.params.id,
                req.body,
                { returnDocument: 'after' }
            );
    
            res.json(updated);
    
        } catch (err) {
    
            res.status(500).json({ message: err.message });
    
        }
    
}

//DELETE
export const DeleteEnseignant = async(req, res) =>{
    
    try {

        await Enseignant.findByIdAndDelete(req.params.id);

        res.json({ message: "Supprimé avec succès" });

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

}

//FIND ALL
export const ListEnseignant = async (req, res) =>{
    try {
   
           const data = await Enseignant.find();
   
           res.json(data);
   
       } catch (err) {
   
           res.status(500).json({ message: err.message });
   
       }
    
}

//FIND ONE
export const FindOneEnseignant = async (req, res) =>{
    
        try {
    
            const data = await Enseignant.findById(req.params.id);
    
            if (!data) return res.status(404).json({ message: "Not found" });
    
            res.json(data);
    
        } catch (err) {
    
            res.status(500).json({ message: err.message });
    
        }
    
}