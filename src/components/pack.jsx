import { NavLink, useLoaderData } from "react-router-dom";
import { createPack } from "../api";
import ShowCard from "./showCard";

export async function packLoader({params}){
    const cards = await createPack(params.edition);
    return {cards};
}

export default function Pack(){
    const {cards} = useLoaderData();
    const results = cards.map((card) =>
    <ShowCard key={card.id} card = {card}> </ShowCard>
    );

    return (
        <div id="pack-cards">
            {results}
        </div>
    );
}