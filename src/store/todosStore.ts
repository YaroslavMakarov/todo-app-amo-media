import { Action } from 'redux';

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO_TITLE = "CHANGE_TODO_Title";
const CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS";

type AddTodo = Action<typeof ADD_TODO> & {
    todo: Todo;
};

type DeleteTodo = Action<typeof DELETE_TODO> & {
    id: string | null;
}

type ChangeTodoTitle = Action<typeof CHANGE_TODO_TITLE> & {
    id: string;
    title: string;
}

type ChangeTodoStatus = Action<typeof CHANGE_TODO_STATUS> & {
    id: string;
    done: boolean;
}

export const addTodo = (todo: Todo):AddTodo => ({
    type: ADD_TODO,
    todo,
});

export const deleteTodo = (id: string | null): DeleteTodo => ({
    type: DELETE_TODO,
    id,
});

export const changeTodoTitle = (id: string, title: string): ChangeTodoTitle => ({
    type: CHANGE_TODO_TITLE,
    id,
    title,
});

export const changeTodoStatus = (id: string, done: boolean): ChangeTodoStatus => ({
    type: CHANGE_TODO_STATUS,
    id,
    done,
});

export type InitialTodoState = {
    todos: Todo[];
}

const initialTodoState: InitialTodoState = {
    todos: [],
};

export type AllTodoActions = AddTodo | DeleteTodo | ChangeTodoTitle | ChangeTodoStatus;

const todosReducer = ( state = initialTodoState, action: AllTodoActions) => {
    switch (action.type) {

        case ADD_TODO: return {
            todos: [...state.todos, action.todo]
        };

        case DELETE_TODO: return {
            todos: state.todos.filter(todo => todo.id !== action.id)
        };

        case CHANGE_TODO_TITLE: return {
            todos: state.todos.map(todo => (
                (todo.id === action.id)
                    ? {...todo, title: action.title}
                    : todo
            ))
        };

        case CHANGE_TODO_STATUS: return {
            todos: state.todos.map(todo => (
                (todo.id === action.id)
                    ? {...todo, done: action.done}
                    : todo
            ))
        };

        default: return state;
    }
};

export default todosReducer;
