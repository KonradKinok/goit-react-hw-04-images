import React from 'react';
import icon from "../../Images/icons.svg";
import icon2 from "/icons.svg";

export function IconSearch() {
    console.log("Icon Paths:", icon2)
    return (
        <svg width="16" height="16">
            <use href={`${icon2}#icon-search`} />
        </svg>
    )
};

