import React from 'react'

// MODULE
// import { useSelector } from 'react-redux'

// COMPONENT
import TabFilter from './TabFilter'
// import FirstContent from './FirstContent'
import SecondContent from './SecondContent/'

function Content (props) {

    const {
        selectedTab,setSelectedTab
    } = props

    // const list = useSelector(state=>state.product.productFilter) || []
    
    return (
        <div className="home-main-content">

            <TabFilter
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />

            {/* <FirstContent/> */}
            {/* {
                list.length > 0 ?   
                <div className="home-slides-container-root-049">
                    <SecondContent/>
                </div> : <SecondContent/>
            } */}
            <SecondContent/>

        </div>
    )

}

export default Content