import { useState } from 'react';
import '../css/Authentification/Sign_in.css'
export default function Signin(){
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [poste, setPoste] = useState('')
    const [username, setUsername] = useState('');
    const [mdp, setMdp] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [typemdp, setType] = useState('password')
    const [typeconfirmation, setTypeConfirmation] = useState('password')
    const handleClickSee = (valeur, set) => {
        (valeur === "password")? set("text") : set("password")
    }
    const handleClickSave = async () => {
        const url = "";
        const answer = await fetch()
    }
    return(
        <>
        <a>retour</a>
        <div className="formulaire-signin">
            <h2>Creation de compte</h2>
            <label htmlFor="nom">Nom</label>
            <input type="text" name="" id="nom" onChange={(e) => {setNom(e.target.value)}}/>
            <label htmlFor="Prenom">Prenom</label>
            <input type="text" name="" id="Prenom" onChange={(e) => {setPrenom(e.target.value)}}/>
            <label htmlFor="Poste">Poste</label>
            <input type="text" name="" id="Poste" onChange={(e) => {setPoste(e.target.value)}}/>
            <label htmlFor="Username">Nom d'utilisateur</label>
            <input type="text" name="" id="Username" onChange={(e) => {setUsername(e.target.value)}}/>
            
            <label htmlFor="mdp">Mot de passe</label>
            <div >
                <input type={typemdp} name="" id="mdp" onChange={(e) => {setMdp(e.target.value)}}/>
                <button onClick={() => {handleClickSee(typemdp, setType)}}>voir</button>
            </div>
            
            <label htmlFor="confirmation_mdp">Confirmer votre mot de passe</label>
            <div>
                <input type={typeconfirmation} name="" id="confirmation_mdp" onChange={(e) => {setConfirmation(e.target.value)}}/>
                <button onClick={() => {handleClickSee(typeconfirmation, setTypeConfirmation)}}>voir</button>
            </div>
            
            <button onClick={handleClickSave}>Enregistrer</button>
        </div>
        </>
    );
}