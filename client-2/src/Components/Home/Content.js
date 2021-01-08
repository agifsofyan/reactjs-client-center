import React from 'react'

// COMPONENT
import TabFilter from './TabFilter'
// import FirstContent from './FirstContent'
import SecondContent from './SecondContent/'

function Content (props) {

    const {
        selectedTab,setSelectedTab
    } = props
    
    return (
        <div className="home-main-content">

            <TabFilter
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />

            {/* <FirstContent/> */}

            <SecondContent/>

        </div>
    )

}

export default Content