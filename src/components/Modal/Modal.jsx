import "./Modal.scss"
import { Component, useEffect } from "react";
import PropTypes from "prop-types";

export function Modal({ closeModal, imgUrlModal, tagModal }) {

    useEffect(() => {
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const handleEsc = (event) => {
        if (event.keyCode === 27) {
            closeModal();
        }
    };

    const handleClickOutside = (event) => {
        if (event.target === event.currentTarget || event.keyCode === 27) {
            closeModal();
        }
    };

    return (
        <div className="overlay" onClick={handleClickOutside}>
            <div className="modal" >
                <img src={imgUrlModal} alt={tagModal} />
            </div>
        </div>
    )
}

Modal.propTypes = {
    imgUrlModal: PropTypes.string.isRequired,
    tagModal: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};