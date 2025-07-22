import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext(null);

export function SearchProvider({ children }: any) {
    const [query, setQuery] = useState("")


    return (
        <SearchContext.Provider value={{ query, setQuery } as any}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearch = () => useContext(SearchContext);
