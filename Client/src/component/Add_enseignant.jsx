import { useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
export default function AddEnseignant(){
    const url = 'http://localhost:3000/enseignant/create'
    const token = localStorage.getItem("token");
    const user = JSON.parse(
        localStorage.getItem("user")
    );
    const [enseignant, setEnseignant] = useState({
        Nom:"", 
        Prenom:"",
        Poste:"",
        Taux_horaire:"",
        Nb_heure:""
        });
    const [alert, setAlert] = useState({
        all:"",
        bool:false
    });
    const handleClickAddTeacher = async () =>{
        if(!enseignant.Nom || !enseignant.Taux_horaire || !enseignant.Poste || !enseignant.Nb_heure ) return setAlert({...alert, all:"Veuillez remplir tous les champs"});
        try{

            const res = await axios.post(url, enseignant,
                {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                }
            );
            setEnseignant({ Nom:"", Prenom:"", Poste:"",Taux_horaire:"",Nb_heure:""});
            setAlert({...alert,all:"Utilisateur crée avec succès", bool:true});
            setTimeout(()=>{
                setAlert({all:"", bool:false});
            },5000);
        }catch(err){
            console.error(err)
        }

    }

    const BoolAlert = (e) =>{
        if(e){
            return "green";   
        }else{
            return "red";
        }
    }
    return(
        <div>
            <div>{user.username}</div>
            <Navbar/>
            <div className="form-add-teacher">
                <h2>Ajouter un enseignant</h2>
                <label htmlFor="nom">Nom</label>
                <input type="text" name="" id="nom" value={enseignant.Nom} onChange={e=>setEnseignant({...enseignant, Nom:e.target.value})}/>
                <label htmlFor="Prenom">Prenom</label>
                <input type="text" name="" id="Prenom" value={enseignant.Prenom} onChange={e=>setEnseignant({...enseignant, Prenom:e.target.value})}/>
                <label htmlFor="taux">Taux horaire</label>
                <input type="number" name="" id="taux" value={enseignant.Taux_horaire} onChange={e=>setEnseignant({...enseignant, Taux_horaire:e.target.value})}/>
                <label htmlFor="Nb_heure">Nombre d'heure</label>
                <input type="number" name="" id="Nb_heure" value={enseignant.Nb_heure} onChange={e=>setEnseignant({...enseignant, Nb_heure:e.target.value})}/>
                <label htmlFor="Poste">Poste</label>
                <input type="text" name="" id="Poste" value={enseignant.Poste} onChange={e=>setEnseignant({...enseignant, Poste:e.target.value})}/>
                <button onClick={handleClickAddTeacher}>Ajouter un enseignant</button>
                {alert && (<div style={{color:BoolAlert(alert.bool)}}>{alert.all}</div>)}
            </div>
        </div>
    )
}