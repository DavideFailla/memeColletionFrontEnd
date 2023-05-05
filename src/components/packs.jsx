import { NavLink, Outlet } from "react-router-dom";
import { createPack} from "../api"
import { useState } from "react";

export default function Packs(){
    function ogPack(){
        createPack("OG");
    }

    function genZPack(){
        createPack("GEN_Z");
    }
    return(
        <>
        
        <div>
        <Outlet/>
        </div>

        <div id="pack-grid">
            <div className="pack-grid-div"> 
            <img className="pack-images" src="./src/images/OG-PACK.jpg" alt="OG PACK"></img>
            <button type="button" className="pack-button" onClick={ogPack}>
            <NavLink to="/pack/OG">ACQUISTA OG PACK <br></br> 150 ME-MONETE</NavLink></button>
            </div>
            <div className="pack-grid-div">
            <img className="pack-images" src="./src/images/GEN_Z-PACK.jpg" alt="GEN_Z PACK"></img>
            <button type="button" className="pack-button" onClick={genZPack}>
            <NavLink to="/pack/GEN_Z">ACQUISTA GEN_Z PACK <br></br> 150 ME-MONETE</NavLink>    
            </button>
            </div>
            
        </div>
        </>
    )
}