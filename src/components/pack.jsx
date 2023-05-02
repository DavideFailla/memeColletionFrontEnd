import { createPack} from "../api"

export default function Pack(){

    function ogPack(){
        createPack("OG");
    }

    function genZPack(){
        createPack("GEN_Z");
    }

    return(

        <div id="pack-grid">
            <div className="pack-grid-div"> 
            <img className="pack-images" src="./src/images/OG-PACK.jpg" alt="OG PACK"></img>
            <p>Acquista il pacchetto di carte dell'edizione OG a soli 2.99$</p>
            <button type="button" className="pack-button" onClick={ogPack}>
                ACQUISTA OG PACK
            </button>
            </div>
            <div className="pack-grid-div">
            <img className="pack-images" src="./src/images/GEN_Z-PACK.jpg" alt="GEN_Z PACK"></img>
            <p>Acquista il pacchetto di carte dell'edizione GEN_Z a soli 2.99$</p>
            <button type="button" className="pack-button" onClick={genZPack}>
                ACQUISTA GEN_Z PACK
            </button>
            </div>
           
        </div>
    )
}