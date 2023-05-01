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
        <Form id="contact-form">
            <label>Inserisci la tua Email</label>
            <input type="email" placeholder="Inserisci la mail" value={email} onChange={changeEmail}></input>
            <label>Inserisci il tuo messaggio</label>
            <input type="text" placeholder="Scrivi il tuo messaggio" value={text} onChange={changeText}></input>
            <button type="submit">Conferma</button>
        </Form>
    )
}