export default function ShowCard({card, name}){
   let cardImage = null;
   if(card){
      cardImage = <><img id="meme" alt={name} src={`/memeImage/${card.name}.png`}/>
      <p>{name.replaceAll("_", " ")}</p></>
   }else{
      cardImage = <><img id="meme" alt={name} src="/memeImage/CARTA-VUOTA.png"></img>
      <p>{name.replaceAll("_", " ")}</p></>
   }
   return(
      <div className="card-meme">
        {cardImage}
      </div>
   ) 
}

