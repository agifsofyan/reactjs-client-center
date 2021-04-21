import React , { useEffect , useState } from 'react'

// MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';

// STYLE
import './style.css'

function Search (props) {

    const {
        setDataNews ,
        NewsTemp
    } = props

    // LOCAL STATE
    const [text] = useState(['Cari tips bisnis','Cari tips karir','Cari tips investasi'])
    const [index,setIndex] = useState(0)

    useEffect(()=>{
        return setTimeout(()=>{
           if (index === 2) setIndex(0)
           else setIndex(index + 1)
        },5000)
    },[text,index])

    let handleSearch = (str) => {
        if (str === "" || str.length === 0 ) {
            setDataNews(NewsTemp)
        }else {
            setDataNews(NewsTemp.filter(e=>searchAction(e,str)))
        }
    }

    let searchAction = (e,str) => {
        console.log(e , ' <<< VALUE E')
        return (
            e.content.title.toUpperCase().search(str.toUpperCase() ) >= 0 
        )
    }

    return (
        <div
            className="search-container-11"
        >
            <input 
                placeholder={text[index]}
                onChange={e=>handleSearch(e.target.value)}
                onKeyDown={e=>console.log('MANDEK ><><<<><>')}
            />
            
            <SearchIcon
                style={{marginRight : 12 , fontSize : 30}}
            />
        </div>
    )

}


export default Search