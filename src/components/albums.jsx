import { getAlbum } from "../api"
import showAlbum from "./showAlbum";
import { NavLink, Outlet } from "react-router-dom";

export default function Albums(){

    function ogAlbum(){
        const results = getAlbum("OG");
    }

    function gen_zAlbum(){
        const results = getAlbum("GEN_Z");
    }

    return(
        <>
        <div>
            <button type="button" onClick={ogAlbum}>
                <NavLink to ="/albums/og">Album OG</NavLink>
            </button>
            <button type="button" onClick={gen_zAlbum}>
            <NavLink to ="/albums/gen-z">Album GENZ</NavLink>
            </button>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}