import { useEffect, useState } from 'react';
import '../css/Authentification/Sign_in.css'
import axios from 'axios';
export default function Signin(){
    const [userinfo, setUserinfo] = useState({
        nom:"", prenom:"", poste:"", username:"", password:""
    })
    const [alert, setAlert] = useState({ alertUsername:"", alertPassword:""})
    const [confirmation, setConfirmation] = useState('');
    
    const [userExist, setuserExist] = useState(false)
    const [typemdp, setType] = useState('password')
    const [typeconfirmation, setTypeConfirmation] = useState('password')
    const [Res, SetRes] = useState({})
    const url = 'http://localhost:3000'

    //to see password or the password confirmation
    const handleClickSee = (valeur, set) => {
        (valeur === "password")? set("text") : set("password")
    }

    useEffect(() => {
        if(!userinfo.username) return;

        if(username.length <= 2 ){
            setAlert(prev=>({...prev, alertUsername:"L'username doit être plus de 2 caractère !"}))
        }
        const verificationUsername = setTimeout(async()=>{
        try{
        
                setAlert({...alert, alertUsername:""})
                const res = await axios.post(`${url}/verify`, {username:username});
                console.log(res.status)
                setUserinfo({...userinfo, username:username})
        }catch{
            
        }
    }
    )
            

    }, [userinfo.username]);
    
    
    //to save
    const handleClickSave = async () => {
        console.log(userinfo);
        if(!userinfo.username || !userinfo.password){
            set
        }
        //const response = await axios.post(`${url}/signin`, userinfo);
    }

    //to verify username length and to see if username doesn't exist
    

    return(
        <>
        <a>retour</a>
        <div className="formulaire-signin">
            <h2>Creation de compte</h2>
            <label htmlFor="nom">Nom</label>
            <input type="text" name="" id="nom" onChange={e=>setUserinfo({...userinfo, nom:e.target.value})}/>
            <label htmlFor="Prenom">Prenom</label>
            <input type="text" name="" id="Prenom" onChange={e=>setUserinfo({...userinfo, prenom:e.target.value})}/>
            <label htmlFor="Poste">Poste</label>
            <input type="text" name="" id="Poste" onChange={e=>setUserinfo({...userinfo, poste:e.target.value})}/>
            <label htmlFor="Username">Nom d'utilisateur</label>
            <input type="text" name="" id="Username"  onChange={e=>setUserinfo({...userinfo, username:e.target.value})}/>
            {alert && (<div>{alert.alertUsername}</div>)}
            
            <label htmlFor="mdp">Mot de passe</label>
            <div >
                <input type={typemdp} name="" id="mdp" onChange={(e) => {setMdp(e.target.value)}}/>
                <button onClick={() => {handleClickSee(typemdp, setType)}}>voir</button>
            </div>
            
            <label htmlFor="confirmation_mdp">Confirmer votre mot de passe</label>
            <div>
                <input type={typeconfirmation} name="" id="confirmation_mdp" onChange={(e) => {setConfirmation(e.target.value)}}/>
                <button onClick={() => {handleClickSee(typeconfirmation, setTypeConfirmation)}}>voir</button><br />
            </div>
            
            <button onClick={handleClickSave}>Enregistrer</button>
            {Res && (<div>{Res.message}</div>)}
        </div>
        </>
    );
}