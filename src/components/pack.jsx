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
            <button type="button" className="og-pack" onClick={ogPack}>
                pacchetto OG
            </button>
            <button type="button" className="genz-pack" onClick={genZPack}>
                pacchetto GEN_Z
            </button>
        </div>
    )
}