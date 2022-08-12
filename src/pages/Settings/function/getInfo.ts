import axios from "axios";
import { SettingsInfo } from "../../../types";
import { getCookie, serverUrl } from "../../../utils";

export async function getInfo(setUserInfo: React.Dispatch<React.SetStateAction<SettingsInfo>>) {
    if (getCookie("UID")) {
        const info = await axios({
            url: serverUrl() + "/getInfo",
            data: { token: getCookie("UID") },
            method: "POST",
        })
        if (info.data.result)
            setUserInfo({ ...info.data.info })
        return info.data.result;
    } else {
        return false
    }
}