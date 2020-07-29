import React, {useState, Dispatch, useCallback} from "react";
import debounce from 'lodash.debounce';
import { useDispatch } from "react-redux";
import "./SearchField.scss";
import {AllSearchActions, searchValue} from "../../store/searchInputStore";


const SearchField = () => {
    const [inputValue, changeInputValue] = useState<string>('');
    const searchDispatch = useDispatch<Dispatch<AllSearchActions>>();

    const debounceDispatch = (value: string) => {
        searchDispatch(searchValue(value))
    };

    const debounceSearchParams = useCallback(
        debounce((debounceDispatch), 500), []
    );

    return (
        <div className="searchField">
            <input
                type="text"
                value={inputValue}
                className="searchField__input"
                onChange={({ target }) => {
                    changeInputValue(target.value);
                    debounceSearchParams(target.value);
                }}
                placeholder="Enter task name for search..."
            />
        </div>
    );
};

export default SearchField;
