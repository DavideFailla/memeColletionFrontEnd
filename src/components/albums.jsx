import { getAlbum } from "../api"
import { NavLink, Outlet } from "react-router-dom";
import OgAlbum from "../images/OGALBUM.png";
import GenzAlbum from "../images/GEN_ZALBUM.png";

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
            
            <NavLink to ="/albums/OG" className="album-img-link"><img src={OgAlbum} onClick={ogAlbum}/></NavLink>
           

            
            
           
            <NavLink to ="/albums/GEN_Z" className="album-img-link"><img src={GenzAlbum}  onClick={gen_zAlbum}></img> </NavLink>
            
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}