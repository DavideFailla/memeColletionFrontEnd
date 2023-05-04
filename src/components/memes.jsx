import { useLoaderData } from "react-router-dom";
import { getMemes } from "../api";
import ShowCard from "./showCard";



export async function memeLoader(){
    const cards = await getMemes();
    return {cards};
}

export default function Memes(){
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