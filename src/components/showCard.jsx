export default function ShowCard({card, name}){
   let cardImage = null;
   if(card){
      cardImage = <><img id="meme" alt={name} src={`/memeImage/${card.name}.png`}/>
      <p>{name}</p></>
   }else{
      cardImage = <><img id="meme" alt={name} src="/memeImage/CARTA-VUOTA.png"></img>
      <p>{name}</p></>
   }
   return(
      <div className="card-meme">
        {cardImage}
      </div>
   ) 
}

