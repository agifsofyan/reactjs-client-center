import React from 'react'

// MODULE
import { useHistory } from 'react-router-dom'

function ListComponent (props) {

    // HISTORY
    const history = useHistory()

    const { tips , active, setActive , slug } = props

    return (
        <>
            {
                tips.map((val,index)=>{
                 return (
                    <div
                        onClick={e=>history.push(`/lms-tips-detail/${slug}/${val._id}`)}
                        key={index} className='tips-group'
                    >
                        <img 
                            src={val.image} 
                            alt='book on shipping' 
                            className='tips-book' 
                        />
                        <div className='tips-desc'>
                            <div className='tips-detail'>
                                <b>{val.title}</b>
                                {/* {
                                    index === 0
                                    ? <img src={tick} alt='tick' className='tips-checkmark' />
                                    : null
                                } */}
                                <br/>
                                {val.desc}
                            </div>
                            <div className='tips-poin'>
                                <b>+{val.point} Poin</b>
                            </div>
                            <div className='author-details'>
                                {/* <img src={author} alt='author' className='author-profile' /> */}
                                <div className='author-name-time'>
                                    {val.read_by.name} ● {"ago"} ● 5 min read
                                </div>
                            </div>
                            {/* <div style={{marginTop:'10px'}}>
                                {val._id}
                            </div> */}
                        </div>
                    </div>
                 )
                })
            }
        </>
    )

}

export default ListComponent