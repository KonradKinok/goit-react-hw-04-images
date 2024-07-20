import "./Button.scss"
import { Component } from "react";
import PropTypes from "prop-types";

export function Button({ handlePagination, totalPages, currentPage }) {
    const handlePaginationButton = () => {
        handlePagination();
    };

    return (
        <>
            <button type="button" className="button" onClick={handlePaginationButton}>Load more: {currentPage}/{totalPages}</button>
        </>
    )
}

Button.propTypes = {
    handlePagination: PropTypes.func.isRequired,

};