export interface LoginProps {
  auth: () => void;
  login: boolean;
  children: JSX.Element;
}

export interface AuthData {
  login: string;
  password: string;
}

export interface MainProps {
  auth: () => void;
}

export interface NavMenuProps {
  open: () => void;
  stateOpen: boolean;
}

export interface HeadProps {
  openMenu: () => void;
  reAuth: () => void;
}
