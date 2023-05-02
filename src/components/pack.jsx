import { createPack} from "../api"

export default function Pack(){

    function ogPack(){
        createPack("OG");
    }

    function genZPack(){
        createPack("GEN_Z");
    }

    return(

        <div>
            <button type="button" className="pack-button" onClick={ogPack}>
                 OG PACK
            </button>
            <button type="button" className="pack-button" onClick={genZPack}>
                 GEN_Z PACK
            </button>
        </div>
    )
}