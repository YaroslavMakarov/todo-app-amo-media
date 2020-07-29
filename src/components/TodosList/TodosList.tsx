import React from "react";
import TodosItem from "../TodosItem/TodosItem";
import { useSelector } from "react-redux";
import { prepareTodosSelector } from "../../store/rootStore";
import "./TodosList.scss";

const TodosList = () => {
    const todos = useSelector(prepareTodosSelector);

    return (
        <ul className="todos-list">
            {todos.map(todo => (
                <TodosItem todo={todo}/>
            ))}
        </ul>
    )
};

export default TodosList;
