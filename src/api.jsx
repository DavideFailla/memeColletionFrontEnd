import axios from "axios";
import showAlbum from "./components/showAlbum";

export const authenticate = async (email, password) => {
    const response = await axios.post('http://localhost:8080/api/auth/authenticate',
    {
        "email": `${email}`,
        "password": `${password}`,
    });
    localStorage.setItem("token",response.data.access_token);
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
    const response = await axios.post('http://localhost:8080/api/players/createPack',{
    },
    {
        headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
            stringPackEdition : stringPackEdition,
        }
    });
    console.log(response.data);
};

export const getAlbum = async (albumEdition) => {
    const response = await axios.get('http://localhost:8080/api/cards/showAlbum',{
        headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
            albumEdition : albumEdition,
        }
    });
    showAlbum(response.data);
}
