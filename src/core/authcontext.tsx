import {FunctionComponent, createContext, useState} from "react";

import { User } from "../utils/types";
interface Context {
  userInfo: User | null;
  setUserInfo: (user: User | null) => void;
}

export const AuthContext = createContext<Context>({
  userInfo: null,
  setUserInfo: (_user) => {}
});


interface Props {
    children: React.ReactNode;
}
export const AuthProvider: FunctionComponent<Props> = ({children}) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};