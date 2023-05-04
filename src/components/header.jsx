import { Link } from "react-router-dom";
import NavBar from "./navBar";
import { useState } from "react";

export default function Header(){

    const [user,setUser] = useState("");
    
    
    return(
        <>
        <header>
        <Link to="/home"><img id="logo-sito" src="./src/images/logo.png" alt="logo" /></Link>
        <NavBar/>
        { user ?(
           <p> Benvenuto, {user}</p>
        ) : (  
        <button>
            <Link to="/login" id="logout-link">LOGIN</Link>
        </button>)
        
      
        }
       
        </header>
        </>
        
    )
}