import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.bittrex.com/api/v1.1/public"
});

export default instance;