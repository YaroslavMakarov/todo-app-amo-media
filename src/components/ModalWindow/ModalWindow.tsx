import React, {Dispatch} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ModalWindow.scss";
import {idForDeleteSelector, openModalSelector, todoTitleSelector} from "../../store/rootStore";
import {AllTodoActions, deleteTodo} from "../../store/todosStore";
import {AllModalAction, openModal} from "../../store/modalWindowStore";

const ModalWindow = () => {
    const isOpenModal = useSelector(openModalSelector);
    const idForDelete = useSelector(idForDeleteSelector);
    const todoTitle = useSelector(todoTitleSelector);
    const todosDispatch = useDispatch<Dispatch<AllTodoActions>>();
    const modalWindowDispatch = useDispatch<Dispatch<AllModalAction>>();

    return (
        <>
            {isOpenModal
            && (
                <div className="modal__overlay">
                    <div className="modal__body">
                        <div className="modal__text">
                            {`do you really want to delete «${todoTitle}» ?`}
                        </div>
                        <div className="modal__buttons-wrapper">
                            <button
                                type="button"
                                className="modal__button"
                                onClick={() => {
                                    todosDispatch(deleteTodo(idForDelete));
                                    modalWindowDispatch(openModal(false, null, null))
                                }}
                            >
                                OK
                            </button>
                            <button
                                type="button"
                                className="modal__button"
                                onClick={() => {
                                    modalWindowDispatch(openModal(false, null, null));
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                        <button
                            type="button"
                            className="modal__button-cross"
                            onClick={() => modalWindowDispatch(openModal(false, null, null))}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 36 36" data-testid="close-icon">
                                <path
                                    d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"
                                    fill="#000"
                                >
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
};

export default ModalWindow;
