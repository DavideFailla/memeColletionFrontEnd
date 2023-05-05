import { NavLink, useLoaderData, useOutletContext } from "react-router-dom";
import { createPack } from "../api";
import ShowCard from "./showCard";
import { useEffect } from "react";

export async function packLoader({params}){
    const cards = await createPack(params.edition);
    return {cards};
}


export default function Pack(){
    console.log(useOutletContext());
    const { loadPlayerDetails } = useOutletContext();
    const {cards} = useLoaderData(); 
    const results = cards.map((card) =>
    <ShowCard key={card.id} card = {card}></ShowCard>
    );

    useEffect(() =>{
        loadPlayerDetails();
    });

    return (
        <div id="pack-cards">
            {results}
        </div>
    );
}