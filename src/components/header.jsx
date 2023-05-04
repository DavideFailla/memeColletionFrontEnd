import { Link } from "react-router-dom";
import NavBar from "./navBar";
import { useState } from "react";
import { getPlayer } from "../api";

export default function Header(){

    async function player () {
        const result = await getPlayer();
    }
    
    
    return(
        <>
        <header>
            <Link to="/home"><img id="logo-sito" src="./src/images/logo.png" alt="logo" /></Link>
        <NavBar/>
       
        <button>
            <Link to="/login" id="logout-link">LOGIN</Link>
        </button>
       
        </header>
        </>
        
    )
}