import { combineReducers, createStore } from 'redux';
import todosReducer, { InitialTodoState } from "./todosStore";
import modalReducer, {InitialModalState} from "./modalWindowStore";
import searchReducer, {InitialSearchState} from "./searchInputStore";

const rootReducer = combineReducers({
    todos: todosReducer,
    openModal: modalReducer,
    searchField: searchReducer,
});

const store = createStore(rootReducer);

type State = {
    todos: InitialTodoState;
    openModal: InitialModalState;
    searchField: InitialSearchState;
}

//todos selector
export const todosSelector = (state: State) => (state.todos.todos);

//modal selectors
export const openModalSelector = (state: State) => (state.openModal.isOpen);
export const idForDeleteSelector = (state: State) => (state.openModal.id);
export const todoTitleSelector = (state: State) => (state.openModal.title);

//preparedTodosSelector selector
export const prepareTodosSelector = (state: State) => (
    state.todos.todos.filter(todo => (
        todo.title.includes(state.searchField.value)
    ))
);

export default store;
