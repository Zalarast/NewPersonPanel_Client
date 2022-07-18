import axios from "axios";
import { serverUrl } from "../../../utils";

export async function authorization (authData: {login: string, password: string}):Promise<boolean> {
    const res = await axios({url: serverUrl()+"/auth", data: authData, method: "POST"});
    return res.data.result;
    
}