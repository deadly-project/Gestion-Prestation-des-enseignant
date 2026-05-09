import { useRef } from 'react';
import '../css/Authentification/Login.css'
import { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [Res, SetRes] = useState({})
    const onclickLogin = useRef();
    const [Login, setLogin] = useState({username:"", password:""})
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const url = 'http://localhost:3000/login'
    
    const  handleclickLoginAxios = async () => {
        try{
            const res = await Axios.post(url, Login)
            console.log(res.data)
            localStorage.setItem(
                "token",
                res.data.token
            );
            navigate("/dashboard");
        }
        catch(err){
            console.error(err)
        }
    }
    const handleclickLoginGet = async() => {
        console.log([username, password])
        await Axios.post(url, Login)
        .then((res) =>{
            SetRes(res.data)})
        .catch((error) =>{console.log(error)})
    }
    return(
        <>
        <div className="formulaire-login">
            <h1>Login</h1>
            <label>Username :</label>
            <input type="text" onChange={e=>setLogin({...Login,username: e.currentTarget.value})}/>
            <label>Password :</label>
            <input type="password" onChange={e=>setLogin({...Login,password: e.currentTarget.value})}/>
            <button onClick={handleclickLoginAxios}>Login</button>

        </div>
        </>
    );
}
