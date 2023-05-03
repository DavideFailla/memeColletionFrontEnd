import { Form, Outlet, useLoaderData } from "react-router-dom";
import { getDuplicates } from "../api";
import ShowCard from "./showCard";
import { useState } from "react";



export async function duplicateLoader(){
    const cards = await getDuplicates();
    return {cards};
}

export default function Duplicates(){
    const {cards} = useLoaderData();

    const[duplicates, setDuplicates] = useState(cards); 
    const[cardName, setCardName] = useState("");
    const[funLevel, setFunLevel] = useState("");
    const[edition, setEdition] = useState("");
    const[rarity, setRarity] = useState("");

    function changeText(e){
        setCardName(e.target.value);
    }

    function changeFunLevel(e){
        setFunLevel(e.target.value);
    }

    function changeEdition(e){
        setEdition(e.target.value);
    }

    function changeRarity(e){
        setRarity(e.target.value);
    }

    async function handleSubmit(){
        const cards = await getDuplicates(edition,cardName,funLevel,rarity);
        setDuplicates(cards);
    }

    const results = duplicates.map((card) =>
    <ShowCard key={card.id} card = {card}></ShowCard>
    );

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <h3>Ricerca per</h3>
            <label>Nome:</label>
            <input type="text" onChange={changeText} value={cardName}></input>
            <label>Fun Level:</label>
            <select onChange={changeFunLevel} value={funLevel}>
                <option></option>
                <option>PATHETIC</option>
                <option>BASIC</option>
                <option>LOL</option>
                <option>LMAO</option>
                <option>RIP</option>
            </select>
            <label>Edizione:</label>
            <select onChange={changeEdition} value={edition}>
                <option></option>
                <option>OG</option>
                <option>GENZ</option>
            </select>
            <label>Rarità:</label>
            <select onChange={changeRarity} value={rarity}>
                <option></option>
                <option>COMMON</option>
                <option>UNCOMMON</option>
                <option>RARE</option>
                <option>EPIC</option>
                <option>LEGENDARY</option>
            </select>
            <button>Cerca</button>
        </Form>
        <div>
            {results}
        </div>
        </>
    );
}