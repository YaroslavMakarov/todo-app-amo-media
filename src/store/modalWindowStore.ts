import { Action } from 'redux';

const IS_OPEN_MODAL = "IS_OPEN_MODAL";

type OpenModal = Action<typeof IS_OPEN_MODAL> & {
    isOpen: boolean;
    id: string | null;
    title: string | null;
}

export const openModal = (isOpen: boolean, id: string | null, title: string | null): OpenModal => ({
   type: IS_OPEN_MODAL,
   isOpen,
    id,
    title,
});

export type InitialModalState = {
    isOpen: boolean;
    id: string | null;
    title: string | null;
}

const initialState = {
    isOpen: false,
    id: null,
    title: null,
};

export type AllModalAction = OpenModal;

const modalReducer = (state= initialState, action: AllModalAction) => {
    switch (action.type) {
        case IS_OPEN_MODAL: return {
            isOpen: action.isOpen,
            id: action.id,
            title: action.title,
        };

        default: return state
    }
};

export default modalReducer;
