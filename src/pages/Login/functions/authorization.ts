import axios from "axios";
import { setCookie, serverUrl } from "../../../utils";

export async function authorization(authData: {
  login: string;
  password: string;
}): Promise<boolean> {
  const res = await axios({
    url: serverUrl() + "/auth",
    data: authData,
    method: "POST",
  });
  if (res.data.token) setCookie("token", res.data.token);
  return res.data.result;
}

export async function autoAuthorization(token: string) {
  const res = await axios({
    url: serverUrl() + "/auth",
    data: {token: token},
    method: "POST",
  });
  if (res.data.token) setCookie("token", res.data.token);
  return res.data.result;
}
