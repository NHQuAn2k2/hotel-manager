import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { token } from "../utils";
import dayjs from "dayjs";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (token === undefined) {
      setUser("");
    } else {
      const tokenDecode = jwtDecode(token);
      if (dayjs.unix(tokenDecode.exp).isBefore(dayjs())) {
        setUser("");
        localStorage.removeItem("token");
        window.location.reload();
      } else {
        setUser(tokenDecode.ten);
      }
    }
  }, []);
  const values = { user };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
