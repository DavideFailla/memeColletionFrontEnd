import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
        <footer>
        <Link to="/home"><img id="logo-sito" src="./src/images/logo.png" alt="logo" /></Link>
        </footer>
        
        </>
    );
}