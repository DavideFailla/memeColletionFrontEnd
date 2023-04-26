import { useState } from "react";
import { register } from "../api";
import { Form } from "react-router-dom";

export default function Register(){
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[dob, setDob] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[nickname, setNickname] = useState("");

    function handleSubmit(){
        register(firstname, lastname, dob, email, password, nickname);
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
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder="Inserisci il tuo nome" value={firstname} onChange={changeFirstname}></input>
            <input type="text" placeholder="Inserisci il tuo cognome" value={lastname} onChange={changeLastname}></input>
            <input type="date" placeholder="Inserisci la tua data di nascita" value={dob} onChange={changeDob}></input>
            <input type="email" placeholder="Inserisci la mail" value={email} onChange={changeEmail}></input>
            <input type="password" placeholder="Inserisci la password" value={password} onChange={changePassword}></input>
            <input type="text" placeholder="Inserisci il tuo nickname" value={nickname} onChange={changeNickname}></input>
            <button type="submit">Conferma</button>
        </Form>
    )
}