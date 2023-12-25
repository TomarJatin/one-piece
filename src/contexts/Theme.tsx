import React, { createContext, useState, useEffect } from "react";
import { ThemeContextType } from "../types";

// Define the context
const ThemeContext = createContext<ThemeContextType | null>(null);

// Data Provider component
const ThemeProvider= ({ children }: any) => {
  const [theme, setTheme] = useState("dark");


  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };