import { createContext } from "react";
import jwtDecode from "jwt-decode";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const tokenDecode = jwtDecode(token);
  console.log(tokenDecode);
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
};
