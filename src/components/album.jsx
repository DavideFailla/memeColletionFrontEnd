import { useLoaderData } from "react-router-dom";
import { getAlbum } from "../api";
import ShowCard from "./showCard"

export async function albumLoader({ params }) {
    const cards = await getAlbum(params.edition);
    return { cards };
}


export default function Album(){
    const {cards} = useLoaderData();
    const results = cards.map((card) =>
    <ShowCard key={card.id} card = {card}> </ShowCard>
    );
    return (
        <div className="meme-div">
            {results}
        </div>
    );
}