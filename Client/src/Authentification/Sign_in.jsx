import { useEffect, useState } from 'react';
import '../css/Authentification/Sign_in.css'
import axios from 'axios';
export default function Signin(){
    const [userinfo, setUserinfo] = useState({
        nom:"", prenom:"", username:"", password:""
    })
    const [alert, setAlert] = useState({
        resultatUsername:false, resultatPassword:false, alertUsername:"", alertPassword:"", alertAll:""
    })
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
    
    //to verify username length and to see if username doesn't exist
    useEffect(() => {
        if(!userinfo.username) return;

        if(userinfo.username.length <= 2 ){
            setAlert(prev=>({...prev, alertUsername:"L'username doit être plus de 2 caractère !"}))
        }else{
            const verificationUsername = setTimeout(async () => 
                {
                    try{
                            setAlert({...alert, alertUsername:"Verification ..."})
                            const res = await axios.post(`${url}/verify`, {username:userinfo.username});
                            console.log(res.data)
                            //setUserinfo({...userinfo, username:username})
                    }catch(error){
                        console.log(error);
                    }
                }, 500)
                return ()=> clearTimeout(verificationUsername);
        }
    }, [userinfo.username]);
    
    
    //to save
    const handleClickSave = async () => {
        console.log(userinfo);
        if(!userinfo.username || !userinfo.password || !userinfo.nom || !userinfo.prenom){
            setAlert({...alert, alertAll:"Veuillez remplir tous le formulaire !"})
            console.log(alert.alertAll);
            return;
        }
        const response = await axios.post(`${url}/signin`, userinfo);
    }
    

    return(
        <>
        <a>retour</a>
        <div className="formulaire-signin">
            <h2>Creation de compte</h2>
            <label htmlFor="nom">Nom</label>
            <input type="text" name="" id="nom" onChange={e=>setUserinfo({...userinfo, nom:e.target.value})}/>
            <label htmlFor="Prenom">Prenom</label>
            <input type="text" name="" id="Prenom" onChange={e=>setUserinfo({...userinfo, prenom:e.target.value})}/>
            <label htmlFor="Username">Nom d'utilisateur</label>
            <input type="text" name="" id="Username"  onChange={e=>setUserinfo({...userinfo, username:e.target.value})}/>
            {alert && (<div style={{color:alert.resultat == true ? "vert" : "red"}}>{alert.alertUsername}</div>)}
            
            <label htmlFor="mdp">Mot de passe</label>
            <div >
                <input type={typemdp} name="" id="mdp" onChange={e=>setUserinfo({...userinfo, password:e.target.value})}/>
                <button onClick={() => {handleClickSee(typemdp, setType)}}>voir</button>
            </div>
            
            <label htmlFor="confirmation_mdp">Confirmer votre mot de passe</label>
            <div>
                <input type={typeconfirmation} name="" id="confirmation_mdp" onChange={(e) => {setConfirmation(e.target.value)}}/>
                <button onClick={() => {handleClickSee(typeconfirmation, setTypeConfirmation)}}>voir</button><br />
            </div>
            
            <button onClick={handleClickSave}>Enregistrer</button>
            {alert.alertAll && (<div>{alert.alertAll}</div>)}
        </div>
        </>
    );
}