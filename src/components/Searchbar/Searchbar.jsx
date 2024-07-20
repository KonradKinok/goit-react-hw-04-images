import "./Searchbar.scss"
import { Component, useRef, useState, } from "react";
import PropTypes from "prop-types";
import icon from "../../Images/icons.svg";

export function Searchbar({ handleSearch }) {
    const [query, setQuery] = useState("");

    const clickButtonSearch = (event) => {
        event.preventDefault();
        handleSearch(query);
    };

    const handleInputSearchChange = (event) => {
        setQuery(event.currentTarget.value);
    };

    return (
        <header className="searchbar">
            <form className="searchForm">
                <button type="submit" className="searchForm-button" onClick={clickButtonSearch}>
                    <svg className="" width="16" height="16">
                        <use xlinkHref={`${icon}#icon-search`} />
                    </svg>
                </button>
                <input
                    className="searchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    name="query"
                    onChange={handleInputSearchChange}
                />
            </form>
        </header>
    )
};

Searchbar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};