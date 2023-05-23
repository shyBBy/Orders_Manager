import React, { createContext, useContext, useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import { config } from "../config/config";
import { setIfErrMsg } from "../helpers/setIfErrMsg";
import { LoggedUserRes, Login } from "../interfaces/auth.interfaces";

interface AuthContextType {
  user: LoggedUserRes | null;
  setUser: React.Dispatch<React.SetStateAction<LoggedUserRes | null>>;
  signIn: (data: Login) => Promise<any>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<LoggedUserRes | null>(null);

  const signOut = async () => {
    try {
      const res = await fetch(`${config.API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        setUser(null);
      }
    } catch (e) {
      setUser(null);
    } finally {
      ToastAndroid.show("Pomyślnie wylogowano.", ToastAndroid.SHORT);
      setUser(null);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${config.API_URL}/user`, {
          credentials: "include",
        });
        const errMsg = await setIfErrMsg(res);
        if (!errMsg) {
          const userData = await res.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (err) {}
    })();
  }, []);

  const signIn = async (data: Login) => {
    try {
      const res = await fetch(`${config.API_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorData = await res.json();
        ToastAndroid.show(errorData.message, ToastAndroid.LONG);
        setUser(null);
        return;
      }
      const userData = (await res.json()) as LoggedUserRes;
      setUser(userData);
      ToastAndroid.show(`Pomyślnie zalogowano, witaj ${userData.name}`, ToastAndroid.LONG);
    } catch (error) {
      ToastAndroid.show("Coś poszło nie tak, spróbuj raz jeszcze.", ToastAndroid.LONG);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth needs to be used inside AuthContext");
  }
  return auth;
};
