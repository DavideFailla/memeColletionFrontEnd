import { Await, useLoaderData } from "react-router-dom";
import { getAlbum, getMemeNames } from "../api";
import ShowCard from "./showCard"

export async function albumLoader({ params }) {
    const cardPromise = getAlbum(params.edition);
    const namesPromise = getMemeNames(params.edition);
    const cards = await cardPromise;
    const names = await namesPromise;
    return { cards, names };
}

function getCardByName(cards, name){
    return cards.find(c => c.name == name);
}

export default function Album(){
    const {cards, names} = useLoaderData();
    const results = names.map((name) =>{
        const c = getCardByName(cards, name);
        if(c){
            return <ShowCard key={name} card = {c} name={name}> </ShowCard>
        }else{
            return <ShowCard key={name} name = {name}> </ShowCard>
        }
    });

    return (
        <div className="meme-div">
            {results}
        </div>
    );
}