import React from 'react'

const Filter = () => {
    return (
        
            <div className="filterContainer">
                <div className="searchContainer">
                    <input name="search" id="search" placeholder="Search for a country..." autocomplete="off"/>
                </div>
                <div className="selectContainer">
                    <select>
                        <option selected>Filter by Region</option>
                        <option id="africa">Africa</option>
                        <option id="america">America</option>
                        <option id="asia">Asia</option>
                        <option id="europe">Europe</option>
                        <option id="aceania">Oceania</option>
                    </select>
                </div>
            </div>
    )
}

export default Filter
