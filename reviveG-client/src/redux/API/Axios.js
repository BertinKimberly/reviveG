import axios from "axios";

const Axios = axios.create({
   baseURL: "https://reviveg-server.onrender.com/api",
});

export default Axios;
