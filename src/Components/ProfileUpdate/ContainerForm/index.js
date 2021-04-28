import React , { useState } from 'react'

// COMPONENTS CONTAINER
import Edit1 from './Edit1'
import Edit2 from './Edit2'
import Edit3 from './Edit3'
import Edit4 from './Edit4'

// COMPONENTS VIEW
import View from './View'

// COMPONENTES TAB
import Tab from './Tab'

// STYLE
import './style.css'

function ContainerForm (props) {

    const {  selectedTab,setSelectedTab } = props

    // LOCAL STATE
    // const [selectedTab,setSelectedTab] = useState(0)

    let renderComponent = () => {
        let arr = [<Edit1 />,<Edit4/> ,<Edit2/>,<Edit3/>]
        return arr[selectedTab]
    }

    return (
        <div className="c3">
            {
                props.location.search !== "" && <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            }
            {
                props.location.search !== "" ?
                renderComponent() :
                <View setSelectedTab={setSelectedTab}/>
            }

        </div>
    )

}

export default ContainerForm