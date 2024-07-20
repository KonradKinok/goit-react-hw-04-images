import "./ImageGallery.scss";
import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

interface Image {
    id: number;
    tags: string;
    webformatURL: string;
    largeImageURL: string;
}

interface ImageGalleryProps {
    data: Image[];
    openModal: (imgUrl: string, tags: string) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ openModal, data }) => {

    return (
        <ul className="ImageGallery">
            {data && data.map((image) => (
                <ImageGalleryItem
                    key={image.id}
                    tags={image.tags}
                    webformatURL={image.webformatURL}
                    openModal={() => openModal(image.largeImageURL, image.tags)}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            tags: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    openModal: PropTypes.func.isRequired,
};