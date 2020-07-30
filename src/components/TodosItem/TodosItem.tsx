import React, {Dispatch, useState} from "react";
import { useDispatch } from "react-redux";
import cn from 'classnames';
import "./TodosItem.scss";
import {AllTodoActions, changeTodoStatus, changeTodoTitle} from "../../store/todosStore";
import {AllModalAction, openModal} from "../../store/modalWindowStore";

type Props = {
    todo: Todo;
};

const TodosItem: React.FC<Props> = ({ todo }) => {
    const {id, title, done} = todo;
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newTodoTitle, setNewTodoTitle] = useState<string>(title);
    const todosDispatch = useDispatch<Dispatch<AllTodoActions>>();
    const modalDispatch = useDispatch<Dispatch<AllModalAction>>();

    const submitChangeTitle = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Escape') {
            setIsEditing(false);
            setNewTodoTitle(title);
        } else if (event.key === 'Enter' && newTodoTitle.length > 0) {
            todosDispatch(changeTodoTitle(id, newTodoTitle));
            setIsEditing(false);
        }
    };

    return (
        <li
            key={todo.id}
            className="todos_item"
        >
            <input
                type="checkbox"
                className="todos_item__checkbox"
            />
            <label
                className={cn(
                    "todos_item__label",
                    {
                        todos_item__label_hidden: !isEditing,
                        todos_item__label_done: done,
                    }
                    )}
                onDoubleClick={() => {
                    setIsEditing(true)
                    todosDispatch(changeTodoStatus(id, false))
                }}
                onClick={() => todosDispatch(changeTodoStatus(id, !done))}
            >
                {todo.title}
            </label>
            <input
                type="text"
                className={cn(
                    "todos_item__edit_input",
                    {
                        todos_item__editing_title: isEditing,
                    }
                    )}
                value={newTodoTitle}
                onChange={({target}) => setNewTodoTitle(target.value)}
                onKeyDown={(event) => submitChangeTitle(event)}
            />
            <button
                type="button"
                className={cn(
                    "todos_item__delete_button",
                    {
                        todos_item__delete_button_active: done,
                    }
                )}
                onClick={() => modalDispatch(openModal(true, id, title))}
            >
                Delete
            </button>
        </li>
    )
};

export default TodosItem;
