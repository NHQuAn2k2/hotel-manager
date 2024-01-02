import { createContext, useState } from "react";

export const InforCardContext = createContext();
export const InforProvider = ({ children }) => {
  const [inforCard, setInforCard] = useState({
    type: "-- Chon --",
    name: "",
    number: "",
    expriedDay: "",
    cvc: "",
  });
  return (
    <InforCardContext.Provider value={{ inforCard, setInforCard }}>
      {children}
    </InforCardContext.Provider>
  );
};
