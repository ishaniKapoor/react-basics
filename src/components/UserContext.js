import { createContext, useState, useContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
    const {user} = useState({
        name: "John",
        email: "example@email",
    });
    return <UserContext.Provider value={{user}}></UserContext.Provider>
}
export const useUser = () => useContext(UserContext);

//wrap the component using provider with <UserProvider> component tag
// to use do const {user} = useUser() which is our custom hook