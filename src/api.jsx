import axios from "axios";

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

export const createPack = async (edition) => {
    const response = await axios.post('http://localhost:8080/api/players/createPack',{
        "edition" : `${edition}`,
    },
    {
        "Access-Control-Allow-Origin" : "http://localhost:8080",
        withCredentials: true,
        headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`,
        },
    }
    );
};


export const players = async() => {
    fetch('http://localhost:8080/api/players/findAllPlayers', {
    headers: {Authentication: `Bearer ${localStorage.getItem("token")}`}
})
   .then(resp => resp.json())
   .then(json => console.log(JSON.stringify(json)))
}

