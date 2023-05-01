export default function ShowCard({card}){
   return(
      <div className="card-meme">
         <p>{card.name}</p>
         <img id="meme" alt="immagine"></img>
         <p>{card.funLevel}</p>
         <p>{card.rarity}</p>

      </div>
    
   ) 
}

