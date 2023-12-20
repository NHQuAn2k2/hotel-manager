import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { token } from "../utils";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (token === undefined) {
      setUser("");
    } else {
      const tokenDecode = jwtDecode(token);
      if (tokenDecode.exp < Math.floor(Date.now() / 1000)) {
        setUser("");
        localStorage.removeItem("token");
      } else {
        setUser(tokenDecode.ten);
      }
    }
  }, []);
  const values = { user };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
