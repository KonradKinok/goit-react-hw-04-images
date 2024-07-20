import "./ImageGallery.scss"
import { Component, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
const apiKey = '43602379-82b2565bd0b0a0b53c6c265a8';

export function ImageGallery({ openModal, data }) {


    return (
        <ul className="ImageGallery">
            {data.map((image) => (
                <ImageGalleryItem
                    key={image.id}
                    tags={image.tags}
                    webformatURL={image.webformatURL}
                    openModal={() => openModal(image.largeImageURL, image.tags)}
                />
            ))}
        </ul>
    )

}

ImageGallery.propTypes = {
    data: PropTypes.any,
    openModal: PropTypes.func.isRequired,
};