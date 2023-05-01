import { Link } from "react-router-dom";
import NavBar from "./navBar";

export default function Header(){
    return(
        <>
        <header>
        <Link to="/home"><img id="logo-sito" src="./src/images/logo.png" alt="logo" /></Link>
        <NavBar/>
        <button>
        <Link to="/login">LOGOUT</Link>
        </button>
        </header>
        </>
        
    )
}