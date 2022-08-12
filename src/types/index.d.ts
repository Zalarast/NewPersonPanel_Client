export interface userInfo {
  login?: string | null;
  avatar?: string | null;
}

export interface ADInfo {
  ldap?: string | null;
  login?: string | null;
}

export interface LoginProps {
  auth: () => void;
  login: boolean;
  setUserInfo: React.Dispatch<
    React.SetStateAction<userInfo>
  >;
  children: JSX.Element;
}

export interface AuthData {
  login: string;
  password: string;
}

export interface MainProps {
  userInfo: userInfo;
  auth: () => void;
}

export interface NavMenuProps {
  open: () => void;
  stateOpen: boolean;
}

export interface HeadProps {
  userInfo: userInfo;
  openMenu: () => void;
  reAuth: () => void;
}

export interface UserMenuProps {
  userInfo: userInfo;
  logOut: () => void;
}

export interface SettingsInfo {
  userInfo?: userInfo;
  ADInfo?: ADInfo
}
