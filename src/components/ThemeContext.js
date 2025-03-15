import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{
            theme: "light",
            toggleTheme: () => {setTheme(theme === "light" ? "dark" : "light")}
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => (useContext(ThemeContext));

/*

const Switch(){
    const [theme, toggleTheme] = useState();

    <
    checked=(theme === "light")
    onChange={toggleTheme}
    >
    </>
}


*/