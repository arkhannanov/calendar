import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://calendar-server-arkhannanov.herokuapp.com/'
});

