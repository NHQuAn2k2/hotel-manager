import { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [dataSearch, setDataSearch] = useState([]);
  const value = { dataSearch, setDataSearch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
