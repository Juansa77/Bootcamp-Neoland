import axios from "axios";
import { updateToken } from "../../utils/updateToken";

const APIHeaders={
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*",
    Authorization: `Bearer ${updateToken()}`}
    



export const APIuser= axios.create({
    baseURL: "urldelback",
    headers: APIHeaders,
    timeout:60000
})