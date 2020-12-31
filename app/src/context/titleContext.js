import { useState, useContext, createContext } from "react";

const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState(null);

  return (
    <TitleContext.Provider
      value={{
        title: title,
        setTitle: setTitle,
      }}
    >
      {children}
    </TitleContext.Provider>
  );
};

export const useTitleContext = () => useContext(TitleContext);
