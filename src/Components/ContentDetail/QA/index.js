import React from 'react'

// STYLE
import './style.css'

function QA () {

    return (
        <div className="cd-qa-13">
            <div className="c1">
                Sort by
            </div>
            <div className="c2">
                <div className="t1">
                    SR
                </div>
                <input 
                    className="t2"
                    placeholder={"Silahkan Isi Komentar!"}
                />
            </div>
            {
                [0,1,2].map(e=>{
                    return (
                        <div className="c3">
                            <div className="t1">
                                RH
                            </div>
                            
                            <div className="t2">
                                <div className="d1">
                                    USER NAME
                                </div>
                                <div className="d2">
                                    No thank you, but at least its not as stupid as the wavy eyebrow trend. No thank you, but at least its not as stupid as the wavy eyebrow trend.
                                </div>
                                <div className="d3">
                                    <span>
                                        Reply
                                    </span>
                                    <div>
                                        
                                    </div>
                                    <span>
                                        Share
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )

}

export default QA