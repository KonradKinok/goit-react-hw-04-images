import { Component, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import "./PixabayApi.scss";
import { Searchbar } from "../Searchbar/Searchbar"
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader"
import axios from 'axios';
const apiKey = '43602379-82b2565bd0b0a0b53c6c265a8';
export function PixabayApi() {
    // constructor() {
    //     super();
    //     this.state = {
    //         queryPixabayApi: "",
    //         currentPage: 1,
    //         isModalOpen: false,
    //         isLoaderVisible: false,
    //         isButtonVisible: true,
    //         imgUrlModal: "",
    //         tagModal: "",
    //     };
    // }
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [imgUrlModal, setUrlModal] = useState("");
    const [tagModal, setTagModal] = useState("");
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState("");

    // const filteredPlanets = useMemo(
    //     () => handleSearch = (query) => {
    //         setQuery(query);
    //         setCurrentPage(1);
    //         setData([]);
    //         setTotalPages(0);
    //         setIsButtonVisible(false);
    //         console.log("handleSearch", query, currentPage);
    //     },
    //     [query]
    // );
    // const handleSearch = (query) => {
    //     filteredPlanets(query)
    // }
    const handleSearch = (query) => {
        setQuery(query);
        setCurrentPage(1);
        setData([]);
        setTotalPages(0);
        setIsButtonVisible(false);
        console.log("handleSearch", query, currentPage);
    }

    const handlePagination = () => {
        setCurrentPage((prev) => prev + 1);
    }

    const handleLoader = (isLoaderVisible) => {
        setIsLoaderVisible(isLoaderVisible);
    }

    const handleButton = (isButtonVisible) => {
        setIsButtonVisible(isButtonVisible);
    }

    const openModal = (imgUrlModal, tagModal) => {
        setUrlModal(imgUrlModal);
        setTagModal(tagModal);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        handleLoader(true);
        const fetchPictures = async () => {
            try {
                console.log("useEffect", query, currentPage);
                // handleLoader(true);
                const response = await fetchPicturesPerPage(query, currentPage);
                console.log("fetchPictures", response);
                if (response) {
                    setData((prev) => [...prev, ...response.hits]);
                    const totalPages = Math.ceil(response.totalHits / 12);
                    setTotalPages(totalPages);
                }
            } catch (errors) {
                setError(errors.message);
                console.log(errors.message);
            } finally {
                handleLoader(false);
            }
        };

        fetchPictures(query, currentPage);
    }, [query, currentPage]);

    // const filteredPlanets = useMemo(() => {
    //     handleLoader(true);
    //     const fetchPictures = async () => {
    //         try {
    //             console.log("useEffect", query, currentPage);
    //             // handleLoader(true);
    //             const response = await fetchPicturesPerPage(query, currentPage);
    //             console.log("fetchPictures", response);
    //             if (response) {
    //                 setData((prev) => [...prev, ...response.hits]);
    //                 const totalPages = Math.ceil(response.totalHits / 12);
    //                 setTotalPages(totalPages);
    //             }
    //         } catch (errors) {
    //             setError(errors.message);
    //             console.log(errors.message);
    //         } finally {
    //             handleLoader(false);
    //         }
    //     };

    //     fetchPictures(query, currentPage);
    // }, [query, currentPage]);

    async function fetchPicturesPerPage(query, currentPage) {
        const searchParams = new URLSearchParams({
            key: apiKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: currentPage,
        });
        if (query) {
            const url = `https://pixabay.com/api/?${searchParams}`;
            console.log(url);
            const response = await axios.get(url);
            const showButton = response.data.hits.length > 0;
            handleButton(showButton);
            return response.data;
        }
        return;
    }
    return (
        <div className="app">
            <Searchbar handleSearch={handleSearch} />
            {isLoaderVisible ?
                (<Loader isLoaderVisible={isLoaderVisible} />) :
                (<ImageGallery openModal={openModal} data={data} />)}
            {isButtonVisible && <Button handlePagination={handlePagination} totalPages={totalPages} currentPage={currentPage} />}
            {isModalOpen && <Modal closeModal={closeModal} imgUrlModal={imgUrlModal} tagModal={tagModal} />}
        </div>
    )

}

