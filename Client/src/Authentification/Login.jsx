import { useRef } from 'react';
import '../css/Authentification/Login.css'
import { useState } from 'react';
import Axios from 'axios'

export default function Login() {
    const [Res, SetRes] = useState({})
    const onclickLogin = useRef();
    const url = 'http://localhost:3000/test'
    
    const  handleclickLoginAxios = async () => {
        await Axios.post(url, {nathan: "nathan"})
        .then((res) =>{
            SetRes(res.data)})
        .catch((error) =>{console.log(error)})
    }
    const handleclickLoginGet = async() => {
        await Axios.get(url)
        .then((res) =>{
            SetRes(res.data)})
        .catch((error) =>{console.log(error)})
    }
    return(
        <>
        <div className="formulaire-login">
            <h1>Login</h1>
            <label>Username :</label>
            <input type="text" />
            <label>Password :</label>
            <input type="password" />
            <button onClick={handleclickLoginGet}>Login</button>
            {Res && (<div>{Res.message}</div>)}
        </div>
        </>
    );
}
