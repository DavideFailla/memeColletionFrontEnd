import { Form } from "react-router-dom";
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
        <Form onSubmit={handleSubmit} >
            
            <input type="email" placeholder="Inserisci la mail" value={email} onChange={changeEmail} className="login-form">
            </input>
            <input type="password" placeholder="Inserisci la password" value={password} onChange={changePassword} className="login-form">
            </input>
            <button 
            type="submit"
            id="login-button">Conferma</button>
            
        </Form>
    )
}