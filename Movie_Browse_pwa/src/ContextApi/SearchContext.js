import { createContext, useState } from "react";

export const searchContext = createContext();

export default function SearchContextProvider({ children }) {
    const [search, setSearch] = useState("iron man");
    const [imdbID, setImdbID] = useState("iron man");

    const value = {
        search,
        setSearch,
        imdbID,
        setImdbID
    };

    return (
        <searchContext.Provider value={value}>{children}</searchContext.Provider>
    );
}