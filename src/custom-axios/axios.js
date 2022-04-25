import axios from "axios";

const instance = axios.create({
    baseURL : 'https://library-backendlab2.herokuapp.com/api',
    headers : {
        'Access-Control-Allow-Origin' : '*'
    }
}) 

export default instance;
