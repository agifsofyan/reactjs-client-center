import React from 'react'

// MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';

// STYLE
import './style.css'

function Search () {

    return (
        <div
            className="search-container-11"
        >
            <input 
                placeholder="Search something"

            />
            
            <SearchIcon
                style={{marginRight : 12 , fontSize : 30}}
            />
        </div>
    )

}


export default Search