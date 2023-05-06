import { useState } from "react";
import { Form } from "react-router-dom";

export default function ContactUs(){

    const[email, setEmail] = useState("");
    const[text, setText] = useState("");

    function changeEmail(e){
        setEmail(e.target.value);
    }
    function changeText(e){
        setText(e.target.value);
    }

    return(
        <Form className="login-form">
            <label>E-mail</label>
            <input type="email" placeholder="Inserisci la mail" value={email} onChange={changeEmail} className="login-form-input"></input>
            <label>Testo</label>
            <textarea type="text" placeholder="Scrivi il tuo messaggio..." value={text} onChange={changeText} id="text-form-input"></textarea>
            <button type="submit" className="pack-button">Invia</button>

        </Form>
    )
}