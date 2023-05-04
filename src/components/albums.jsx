import { getAlbum } from "../api"
import { NavLink, Outlet } from "react-router-dom";

export default function Albums(){

    async function ogAlbum(){
        getAlbum("OG");
    }

    function gen_zAlbum(){
        getAlbum("GEN_Z");
    }

    return(
        <>
        <div id="album-grid">
            
            <NavLink to ="/albums/OG" className="album-img-link"><img src="./src/images/OGALBUM.png" onClick={ogAlbum}/></NavLink>
           

            
            
           
            <NavLink to ="/albums/GEN_Z" className="album-img-link"><img src="./src/images/GEN_ZALBUM.png"  onClick={gen_zAlbum}></img> </NavLink>
            
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}