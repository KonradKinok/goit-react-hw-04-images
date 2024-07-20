import "./ImageGalleryItem.scss";
import React from "react";
import PropTypes from "prop-types";

interface ImageGalleryItemProps {
    tags: string;
    webformatURL: string;
    openModal: () => void;
}

export const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ tags, webformatURL, openModal }) => {
    return (
        <li className="ImageGalleryItem" onClick={openModal}>
            <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};