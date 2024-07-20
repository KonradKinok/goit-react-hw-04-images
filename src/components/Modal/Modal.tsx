import "./Modal.scss";
import React,{ useEffect } from "react";
import PropTypes from "prop-types";

interface ModalProps {
    closeModal: () => void;
    imgUrlModal: string;
    tagModal: string;
}

// Komponent Modal w TypeScript
export function Modal({ closeModal, imgUrlModal, tagModal }: ModalProps) {

    useEffect(() => {
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            closeModal();
        }
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
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
    closeModal: PropTypes.func.isRequired,
    imgUrlModal: PropTypes.string.isRequired,
    tagModal: PropTypes.string.isRequired,
};