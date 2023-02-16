import { useCallback, useState, createContext } from "react";
import { useEffect } from "react";



const ThemeContext = createContext({
    theme: "dark",
    toogleTheme: () => null,
    
    })
    



const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(`theme`) || `dark`
  );

  const toogleTheme = useCallback(() => {
    setTheme((previousTheme) => (previousTheme === `dark` ? `light` : `dark`));
  }, []);

  useEffect(() => {
    localStorage.setItem(`theme`, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{theme, toogleTheme}}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
