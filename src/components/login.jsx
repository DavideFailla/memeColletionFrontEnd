import { Form, NavLink, Outlet } from "react-router-dom";
import { authenticate } from "../api";
import { useState } from "react";

export default function Login(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");


    function handleSubmit(){
        authenticate(email, password);
    }

    function changeEmail(e){
        setEmail(e.target.value);
    }

    function changePassword(e){
        setPassword(e.target.value);
    }

    return(
            <Form onSubmit={handleSubmit} className="login-form" >
                <label for="e-mail">E-mail</label>
                <input type="email" placeholder="Inserisci la tua e-mail..." value={email} onChange={changeEmail} className="login-form-input">
                </input>
                <label for="password">Password</label>
                <input type="password" placeholder="Inserisci la tua password..." value={password} onChange={changePassword} className="login-form-input">
                </input>
                <button type="submit" className="login-button">Accedi</button>
                <div id="register-div">
                <p>Non sei ancora iscritto?</p>
                <button onClick={event => window.location.href='/register'}>Registrati</button>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
            </Form>
    )
}