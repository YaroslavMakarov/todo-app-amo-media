import { Action } from "redux";

const SEARCH_VALUE = "SEARCH_VALUE";

type SearchValue = Action<typeof SEARCH_VALUE> & {
    value: string,
}

export const searchValue = (value: string): SearchValue => ({
    type: SEARCH_VALUE,
    value,
}) ;

export type InitialSearchState = {
    value: string;
};

const initialSearchState: InitialSearchState = {
    value: "",
};

export type AllSearchActions = SearchValue;

const searchReducer = (state = initialSearchState, action: AllSearchActions) => {
    switch (action.type) {
        case SEARCH_VALUE: return {
            value: action.value,
        };

        default: return state;
    }
};

export default searchReducer;
