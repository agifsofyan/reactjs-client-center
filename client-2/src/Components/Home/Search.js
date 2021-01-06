import React from 'react'

// MATERIAL ICONS
import SearchIcon from '@material-ui/icons/Search';

function Search () {

    return (
        <div className="home-search-content">
            <div className="home-search-c2">
                <SearchIcon style={{color : "#BABABA"}}/>
            </div>
            <input type="text" />
        </div>
    )

}

export default Search