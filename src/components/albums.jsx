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
            <NavLink to ="/albums/OG">Album OG</NavLink>
            </button>
            <button type="button" onClick={gen_zAlbum} className="albums-button">
            <NavLink to ="/albums/GEN_Z">Album GENZ</NavLink>
            </button>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}