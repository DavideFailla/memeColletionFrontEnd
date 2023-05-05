import { useState } from "react";
import { register } from "../api";
import { Form, useNavigate, useOutletContext } from "react-router-dom";

export default function Register(){
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[dob, setDob] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[nickname, setNickname] = useState("");
    const {loadPlayerDetails} = useOutletContext();
    const navigate = useNavigate();

    function handleSubmit(){
        register(firstname, lastname, dob, email, password, nickname);
        loadPlayerDetails();
        navigate("/home");
    }

    function changeFirstname(e){
        setFirstname(e.target.value);
    }

    function changeLastname(e){
        setLastname(e.target.value);
    }

    function changeDob(e){
        setDob(e.target.value);
    }

    function changeEmail(e){
        setEmail(e.target.value);
    }

    function changePassword(e){
        setPassword(e.target.value);
    }

    function changeNickname(e){
        setNickname(e.target.value);
    }

    return(
        <Form className="login-form">
            <label>Nome</label>
            <input type="text" placeholder="Inserisci il tuo nome" value={firstname} onChange={changeFirstname} className="login-form-input"></input>
            <label>Cognome</label>
            <input type="text" placeholder="Inserisci il tuo cognome" value={lastname} onChange={changeLastname}className="login-form-input"></input>
            <label>Data di Nascita</label>
            <input type="date" placeholder="Inserisci la tua data di nascita" value={dob} onChange={changeDob}className="login-form-input"></input>
            <label>Email</label>
            <input type="email" placeholder="Inserisci la tua e-mail" value={email} onChange={changeEmail}className="login-form-input"></input>
            <label>Password</label>
            <input type="password" placeholder="Inserisci la password" value={password} onChange={changePassword}className="login-form-input"></input>
            <label>Nickname</label>
            <input type="text" placeholder="Inserisci il tuo nickname" value={nickname} onChange={changeNickname}className="login-form-input"></input>
            <button type="submit" className="login-button" onClick={handleSubmit}>Conferma</button>
        </Form>
    )
}