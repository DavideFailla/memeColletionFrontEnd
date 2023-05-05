import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Header from "./header";
import Footer from "./footer";
import { getPlayer } from "../api";
import { useEffect, useState } from "react";

export default function Root(){
    const[nickname, setNickname] = useState("");
    const[money, setMoney] = useState("");

    async function loadPlayerDetails () {
        const result = await getPlayer();
        setNickname(result.nickname);
        setMoney(result.money);
    }

    function reset(){
        setNickname("");
        setMoney("");
    }

    useEffect(() =>{
        loadPlayerDetails();
    });
    
    return(
        <>
         <Header id="header" money = {money} nickname={nickname} reset = {reset}>
             
         </Header>

         <main>
            <div><Outlet context={ {loadPlayerDetails} }/></div>
         </main>
            
         <Footer id="footer-root">

         </Footer>
           
        
        
        
              
           
        </>
    )
}