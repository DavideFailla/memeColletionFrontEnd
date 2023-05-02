import { getAlbum } from "../api"
import ShowAlbum from "./showCard";
import showAlbum from "./showCard";
import { NavLink, Outlet } from "react-router-dom";

export default function Albums(){

    async function ogAlbum(){
        getAlbum("OG");
    }

    function gen_zAlbum(){
        const results = getAlbum("GEN_Z");
    }

    return(
        <>
        <div >
            <button type="button" onClick={ogAlbum} className="albums-button">
            <NavLink to ="/albums/OG">OG ALBUM</NavLink>
            </button>
            <button type="button" onClick={gen_zAlbum} className="albums-button">
            <NavLink to ="/albums/GEN_Z">GEN_Z ALBUM</NavLink>
            </button>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}