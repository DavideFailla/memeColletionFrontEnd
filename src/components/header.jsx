import { Link, useNavigate } from "react-router-dom";
import NavBar from "./navBar";
import { useEffect, useState } from "react";
import { getPlayer, logout } from "../api";
import Logo from "../images/logo.png"



export default function Header({nickname, money, reset}){
    const navigate = useNavigate();

    async function handleLogout(){
        await logout();
        localStorage.removeItem("token");
        reset();
        navigate("/");
    }

    async function handleLogin(){
        navigate("/");
    }

    return(
        <>
        <header>
            <Link to="/home"><img id="logo-sito" src={Logo} alt="logo"/></Link>
        <NavBar/>

        {nickname ? <p className="welcome-p"> Benvenuto, {nickname} <br></br> Me-Monete: {money} </p> : <p className="welcome-p">Benvenuto</p>}
        {nickname ? <button onClick={handleLogout}><p>LOGOUT</p></button> : <button onClick={handleLogin}><p>LOGIN</p></button>}
        </header>

        
        </>
        
    )
}