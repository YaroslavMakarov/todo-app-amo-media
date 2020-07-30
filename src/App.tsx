import React from 'react';
import { useSelector } from "react-redux";
import './App.scss';
import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/TodosList/TodosList";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import SearchField from "./components/SearchField/SearchField";
import { todosSelector } from "./store/rootStore";

const App = () => {
    const todos = useSelector(todosSelector);

  return (
    <div className="app">
        <div className="app__content">
            {todos.length > 2
            && <SearchField />}
            <TodosList />
            <AddTodo />
        </div>
        <ModalWindow />
    </div>
  );
};

export default App;
