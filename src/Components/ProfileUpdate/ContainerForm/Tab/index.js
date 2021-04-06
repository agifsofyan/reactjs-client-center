import React from 'react'

function Tab (props) {

    const { selectedTab,setSelectedTab } = props

    return (
        <div className="tab">
            <div 
                className={ selectedTab === 0 ? "item-active" : "item"}
                onClick={e=>setSelectedTab(0)}
            >
                Data diri 
            </div>
            <div 
                className={ selectedTab === 1 ? "item-active" : "item"}
                onClick={e=>setSelectedTab(1)}
            >
                Topik
            </div>
            <div 
                className={ selectedTab === 2 ? "item-active" : "item"}
                onClick={e=>setSelectedTab(2)}
            >
                Alamat
            </div>
        </div>
    )

}   

export default Tab