import { NavLink, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { createPack} from "../api"
import { useState } from "react";

export default function Packs(){
    const {loadPlayerDetails} = useOutletContext();
    const navigate = useNavigate();
    function ogPack(){
        navigate("/pack/OG");
    }

    function genZPack(){
        navigate("/pack/GEN_Z");
    }
    return(
        <>
        
        <div>
        <Outlet context={{loadPlayerDetails}}/>
        </div>

        <div id="pack-grid">
            <div className="pack-grid-div"> 
            <img className="pack-images" src="./src/images/OG-PACK.jpg" alt="OG PACK"></img>
            <button type="button" className="pack-button" onClick={ogPack}>
            ACQUISTA OG PACK <br></br> 150 ME-MONETE</button>
            </div>
            <div className="pack-grid-div">
            <img className="pack-images" src="./src/images/GEN_Z-PACK.jpg" alt="GEN_Z PACK"></img>
            <button type="button" className="pack-button" onClick={genZPack}>
            ACQUISTA GEN_Z PACK <br></br> 150 ME-MONETE   
            </button>
            </div>
            
        </div>
        </>
    )
}