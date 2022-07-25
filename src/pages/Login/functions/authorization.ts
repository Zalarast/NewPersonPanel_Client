import axios from "axios";
import { userInfo } from "../../../types";
import { setCookie, serverUrl, getCookie } from "../../../utils";

export async function authorization(
  authData: {
    login: string;
    password: string;
  },
  setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>
): Promise<boolean> {
  const res = await axios({
    url: serverUrl() + "/auth",
    data: { ...authData, reauth: true },
    method: "POST",
  });
  res.data.token && setCookie("UID", res.data.token);
  res.data.userInfo.login && setCookie("PID", res.data.userInfo.login);
  setUserInfo({ ...res.data.userInfo });
  return res.data.result;
}

export async function autoAuthorization() {
  if (getCookie("UID")) {
    const res = await axios({
      url: serverUrl() + "/auth",
      data: { token: getCookie("UID"), reauth: false },
      method: "POST",
    });
    if (res.data.token) setCookie("UID", res.data.token);
    return res.data.result;
  } else return false;
}
