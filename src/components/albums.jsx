import { getAlbum } from "../api"
import showAlbum from "./showAlbum";

export default function Albums(){

    function ogAlbum(){
        const results = getAlbum("OG");
    }

    return(
        <div>
            <button type="button" onClick={ogAlbum}>
                Album OG
            </button>
            <button>
                Album GEN_Z
            </button>
        </div>
    )
}