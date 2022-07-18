export interface LoginProps {
  auth: () => void;
}

export interface AuthData {
  login: null | string;
  password: null | string;
}

export interface MainProps {
  auth: () => void;
}
