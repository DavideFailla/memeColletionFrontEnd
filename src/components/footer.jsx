import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
export default function Footer(){
    return(
        <>
        <footer>
        <Link to="/home"><img id="logo-sito" src={Logo} alt="logo" /></Link>
        </footer>
        
        </>
    );
}