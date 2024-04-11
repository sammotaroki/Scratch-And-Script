import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    country1: undefined,
    country2: undefined,
};

export const SearchContext = createContext(INITIAL_STATE)

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
    return (
        <SearchContext.Provider
            value={{
                country1: state.country1,
                country2: state.country2,
                dispatch
            }}>
            {children}
        </SearchContext.Provider>
    )
}