export default function ShowCard({card}){
   return(
      <div className="card-meme">
        <img id="meme" alt="immagine" src={`/memeImage/${card.name}.png`}/>
      </div>
   ) 
}

