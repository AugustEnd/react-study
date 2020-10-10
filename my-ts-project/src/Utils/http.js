import Axios from "axios";

const http = Axios.create({
    baseURL: "/api/partner-service/",
    timeout: 50000,
});

export { http };
