import axios from "axios";

export const authenticate = async (email, password) => {
    const response = await axios.post('http://localhost:8080/api/auth/authenticate',
    {
        "email": `${email}`,
        "password": `${password}`,
    });
    localStorage.setItem("token",response.data.access_token);
    
    return response.status;
}

export const logout = async () => {
    const response = await axios.post('http://localhost:8080/api/auth/logout');
}

export const register = async (firstname, lastname, dob, email, password, nickname) => {
    const response = await axios.post('http://localhost:8080/api/auth/register',
    {
        "firstname" : `${firstname}`,
        "lastname" : `${lastname}`,
        "dob" : `${dob}`,
        "email": `${email}`,
        "password": `${password}`,
        "nickname" : `${nickname}`,
    });
    localStorage.setItem("token",response.data.access_token);
    
};

export const createPack = async (stringPackEdition) => {
    const response = await axios.post('http://localhost:8080/api/players/pack',{
    },
    {
        headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
            stringPackEdition : stringPackEdition,
        }
    });
    return response.data;
};

export const getAlbum = async (albumEdition) => {
    const response = await axios.get('http://localhost:8080/api/cards/album',{
        headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
            albumEdition : albumEdition,
        }
    });
    return response.data;
}

export const getDuplicates = async (edition, cardName, funLevel, rarity) => {
    const response = await axios.get('http://localhost:8080/api/cards/duplicates',{
        headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
        params :{
            edition : edition,
            cardName : cardName,
            funLevel : funLevel,
            rarity : rarity,
        },
    });
    return response.data;
}

export const getMemes = async () => {
    const response = await axios.get('http://localhost:8080/api/cards/memes',{
        headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return response.data;
}

export const getPlayer = async () => {
    const response = await axios.get('http://localhost:8080/api/players/player',{
        headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return response.data;
}

export const getMemeNames = async (albumEdition) => {
    const response = await axios.get(`http://localhost:8080/api/cards/${albumEdition}/memeNames`,{
        headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return response.data;
}