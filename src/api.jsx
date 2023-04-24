import axios from "axios";

export const Authenticate = async (email, password) => {
    const response = await axios.post('http://localhost:8080/api/auth/authenticate',{
        body: JSON.stringify({
            "email" : "belcorso@gmail.com",
            "password" : "belcorso00",
        })
    });
    
}



