import { useRef } from 'react';
import '../css/Authentification/Login.css'
import { useState } from 'react';
import Axios from 'axios'

export default function Login() {
    const [Res, SetRes] = useState({})
    const onclickLogin = useRef();
    const [Login, setLogin] = useState({username:"", password:""})
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const url = 'http://localhost:3000/login'
    
    const  handleclickLoginAxios = async () => {
        await Axios.post(url, {})
        .then((res) =>{
            SetRes(res.data)})
        .catch((error) =>{console.log(error)})
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
            <button onClick={handleclickLoginGet}>Login</button>
            {Res && (<div>{Res.data}</div>)}
        </div>
        </>
    );
}
