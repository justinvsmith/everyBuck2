import React from 'react';
import './Header.css';

export default function Header() {

    const date = new Date();
    const monthNum = date.getMonth();
    const months = ["January", "February", "March",
                    "April", "May", "June",
                    "July", "August", "September",
                    "October", "November", "December"];
    const year = date.getFullYear();

    return(
        <div className="header">
            <div id="titleContainer">
                <p className="title"><span>{months[monthNum]}</span> {year}</p>
            </div>
        </div>
    )
}