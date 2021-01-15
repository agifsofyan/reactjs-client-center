import React from 'react'

// MATERIAL UI ICONS
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';


// STYLE
import './style.css'

function TopicSort () {

    return (
        <div className="plc-topic-root">
            
            <div className="plc-topic-content1">

                <h4>Topic</h4>

                <div>
                    <h6>Choose Topic</h6>
                    <ArrowDropDownIcon className="plc-topic-icon"/>
                </div>

            </div>

            <div className="plc-topic-content2">
                <div>
                    <span>
                        Business    
                    </span>
                    <CloseIcon className="plc-topic-close"/>
                </div>
                <div>
                    <span>
                        Career
                    </span>
                    <CloseIcon className="plc-topic-close"/>
                </div>
                <div>
                    <span>
                        Finance
                    </span>
                    <CloseIcon className="plc-topic-close"/>
                </div>
            </div>

        </div>
    )

}

export default TopicSort