import { Link, useNavigate } from "react-router-dom";
import ImgHome from "../images/img1-home.jpg";
import Sorriso from "../images/background.jpg";
import Sponge from "../images/registrati.jpg";
import Fry from "../images/acquista.png";
import Pika from "../images/catchemall.png";

export default function Home(){

    const navigate = useNavigate();

    function handleClick1(){
        navigate("/memes")
    }
    function handleClick2(){
        navigate("/pack")
    }
    function handleClick3(){
        navigate("/albums")
    }



    return(
        <>
        <div id="grid">
            <img id="img1-home" src={Sorriso} alt="img1"></img>
            <div id="text-div-1">
            <h2>WELCOME TO ME-MERENDA</h2>
            <p>Entra a far parte della divertentissima collezione
                MEME 2022-2023 con ME-MERENDA™ </p>
            </div>
        </div>
        <h2 id="h2-home"> Come funziona Me-Merenda</h2>
        <div id="meme-rules-div">
            <div className="meme-rules-1">
                <h4> Step 1. <br></br> Scopri un mondo nuovo!</h4>
                <img className="img2-home" src={Sponge} alt="img1" onClick={handleClick1}></img>
            </div>
            <div className="meme-rules-1">
                <h4> Step 2. <br></br> Acquista un pacchetto!</h4>
                <img className="img2-home" src={Fry} alt="img1" onClick={handleClick2}></img>
            </div>
            <div className="meme-rules-1">
                <h4> Step 3. <br></br> Gotta catch 'em all!</h4>
                <img className="img2-home" src={Pika} alt="img1" onClick={handleClick3}></img>
            </div>
        </div>
        </>
        
    )
}