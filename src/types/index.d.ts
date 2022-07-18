export interface LoginProps {
  auth: () => void;
}

export interface AuthData {
  login: string;
  password: string;
}

export interface MainProps {
  auth: () => void;
}
