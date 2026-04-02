import { useRef } from 'react';
import '../css/Authentification/Login.css'

export default function Login() {
    const onclickLogin = useRef();
    function handleclickLogin(){

    }
    return(
        <>
        <div className="formulaire-login">
            <h1>Login</h1>
            <label>Username :</label>
            <input type="text" />
            <label>Password :</label>
            <input type="password" />
            <button onClick={handleclickLogin}>Login</button>

        </div>
        </>
    );
}
