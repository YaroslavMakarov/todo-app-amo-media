import React, { useState, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "./AddTodo.scss";
import {addTodo, AllTodoActions} from "../../store/todosStore";

const AddTodo = () => {
    const [inputValue, changeInputValue] = useState<string>("");
    const dispatch = useDispatch<Dispatch<AllTodoActions>>();

    return (
        <div className="add-todo">
            <input
                type="text"
                className="add-todo__input"
                value={inputValue}
                onChange={({ target }) => changeInputValue(target.value)}
                placeholder="Enter task and press 'ADD' button"
            />
            <button
                type="button"
                className="add-todo__button"
                onClick={() => {
                    if (inputValue.length > 0) {
                        dispatch(addTodo({
                            title: inputValue.trim(),
                            id: uuidv4(),
                            done: false,
                        }));
                    }
                    changeInputValue("")
                }}
            >
                ADD
            </button>
        </div>
    )
};

export default AddTodo;
