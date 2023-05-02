import { useLoaderData } from "react-router-dom";
import { getDuplicates } from "../api";
import ShowCard from "./showCard";

export async function duplicateLoader(){
    const cards = await getDuplicates();
    return {cards};
}

export default function Duplicates(){
    const {cards} = useLoaderData();
    console.log(cards);
    const results = cards.map((card) =>
    <ShowCard key={card.id} card = {card}> </ShowCard>
    );
    return (
        <div>
            {results}
        </div>
    );
}