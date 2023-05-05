import React from "react";



function SearchInput({setInputValue}){

    function handleInput(event){
        setInputValue(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div className="search">
            <label htmlFor="search-input">Search</label>
            <input type="text" placeholder="Search..." id="search-input" onChange={handleInput}/>
        </div>
    )
}

export default SearchInput;