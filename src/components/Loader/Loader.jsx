import { RotatingLines } from 'react-loader-spinner'
import { Component } from "react";
import PropTypes from "prop-types";
import "./Loader.scss"

export function Loader({ isLoaderVisible }) {

    return (
        <>
            <div className='container'>
                <RotatingLines
                    visible={isLoaderVisible}
                    height="96"
                    width="96"
                    strokeColor="#3f51b5"
                    strokeWidth="5"
                    ariaLabel="rotating-lines-loading"
                />
            </div>
        </>
    )
};

Loader.propTypes = {
    isLoaderVisible: PropTypes.bool.isRequired,
};