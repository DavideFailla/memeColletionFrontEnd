import axios from "axios";

export const authenticate = async (email, password) => {
    const response = await axios.post('http://localhost:8080/api/auth/authenticate',{"email": `${email}`,"password": `${password}`,
    });
    localStorage.setItem("token",response.data.access_token);
}



