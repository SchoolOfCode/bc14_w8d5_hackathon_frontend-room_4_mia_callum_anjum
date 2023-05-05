import React from "react";



function SearchInput(){

    return(
        <div className="search">
            <label htmlFor="search-input">Search</label>
            <input type="text" placeholder="Search..." id="search-input"/>
        </div>
    )
}

export default SearchInput;