import React , { useEffect } from 'react'

// MODULE
import { useSelector , useDispatch } from 'react-redux'

// GLOBAL ACTION
import { changeValue } from '../../../Redux/Actions/index'

// MATERIAL ICONS
import SearchIcon from '@material-ui/icons/Search';

function Search (props) {

    const { selectedTab } = props

    // GLOBAL STATE
    const list = useSelector(state=>state.product.productList)
    const topicList = useSelector(state=>state.product.topicList)

    // USE EFFECT
    useEffect(()=>{
        if (typeof window !== "undefined") {
            if (window.fbq != null) { 
            //   window.fbq('track', 'ViewContent',)
              window.fbq('track', 'Search');
            }
        }
    },[])

    // CALL DISPATCH
    const dispatch = useDispatch()

    // HANDLE SEARHC
    let handleSearch = (str) => {
        if (str.length === 0 || str === '') {
            let dataProduct = list
            let first = topicList[selectedTab]._id
            let result = []
            dataProduct.forEach(e=>{
                let status = false
                e.topic.forEach(e2=>{
                    if (e2._id === first && !status  ) {
                        result.push(e)
                        status = true
                    }
                })
            })
            dispatch(changeValue("productFilter",result))
        }else {
            let result = list.filter(e=>searchAction(e,str))
            dispatch(changeValue("productFilter",result))
        }
    }

    let searchAction = (e,str) => {
        // console.log(e.headline , ' <<< HEADLINE')
        // if (e.name && e.headline) {
        //     console.log('MASUK SINI')
        //     return (
        //             e.name.toUpperCase().search(str.toUpperCase() ) > 0 ||
        //             e.headline.toUpperCase().search(str.toUpperCase() ) > 0
        //         )
        // }else if (e.name ) {
        //     return (
        //             e.name.toUpperCase().search(str.toUpperCase() ) > 0 
        //         )
        // }
        return (
            e.name.toUpperCase().search(str.toUpperCase() ) >= 0 
        )
    }

    return (
        <div className="home-search-content">
            <div className="home-search-c2">
                <SearchIcon style={{color : "#BABABA"}}/>
            </div>
            <input
                type="text"
                onChange={e=>handleSearch(e.target.value)} 
            />
        </div>
    )

}

export default Search