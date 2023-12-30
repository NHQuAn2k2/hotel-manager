import { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState([]);
  const value = { search, setSearch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
