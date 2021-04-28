import React from 'react'

// MODULE
import { useHistory } from 'react-router-dom'

function ListComponent (props) {

    // HISTORY
    const history = useHistory()

    const { video , active, setActive , slug } = props

    return (
        <>
            {
                video.map((el,index)=>{
                console.log(el , ' <<<< VALUE EL HERE >>>')
                return (
                    <div 
                        style={{cursor : "pointer"}}
                        onClick={e=>history.push(`/lms-video-detail/${slug}/${el._id}`)}
                        className='videos-texts'>
                        {/* <img src='https://www.visme.co/wp-content/uploads/2020/02/i_Adventure-Youtube-Video-Cover_full.jpg' alt='live' className='videos-live' /> */}
                        <video className="videos-live">
                            <source src={el.url}/>
                        </video>
                        <div className='videos-desc'>
                            <img src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' alt='mentor' className='videos-mentor-img' />
                            <div className='videos-summary'>
                                <div className='videos-title'>
                                    <b>{el.title}</b>
                                </div>
                                <div className='videos-mentor-name'>
                                    mentor name here
                                </div>
                                {/* <div className='videos-countdown'>
                                    {"ago"}
                                </div> */}
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </>
    )

}

export default ListComponent