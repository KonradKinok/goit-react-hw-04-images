import "./ImageGalleryItem.scss"
import { Component } from "react";
import PropTypes from "prop-types";

export function ImageGalleryItem({ tags, webformatURL, openModal }) {

    return (
        <li className="ImageGalleryItem" onClick={openModal}>
            <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
        </li>
    )

}

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};