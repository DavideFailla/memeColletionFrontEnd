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
        <Form onSubmit={handleSubmit} id="searc-duplicates-form">
            <h3>Ricerca:</h3>
            
            <input type="text" onChange={changeText} value={cardName} placeholder="Inserisci nome..." className="search-form-input"></input>
            
            <select onChange={changeFunLevel} value={funLevel} placeholder="Fun Level" className="search-form-input">
                <option value={""}>Fun Level</option>
                <option></option>
                <option>PATHETIC</option>
                <option>BASIC</option>
                <option>LOL</option>
                <option>LMAO</option>
                <option>RIP</option>
            </select>
            
            <select onChange={changeEdition} value={edition} className="search-form-input">
                <option value={""}>Edition</option>
                <option></option>
                <option>OG</option>
                <option>GENZ</option>
            </select>
           
            <select onChange={changeRarity} value={rarity} className="search-form-input">
                <option value={""}>Rarity</option>
                <option></option>
                <option>COMMON</option>
                <option>UNCOMMON</option>
                <option>RARE</option>
                <option>EPIC</option>
                <option>LEGENDARY</option>
            </select>
            <button id="search-button">Cerca</button>
        </Form>
        <div>
            {results}
        </div>
        </>
    );
}