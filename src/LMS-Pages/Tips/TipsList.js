import React, { useEffect, useState } from 'react';

// MODULE
import axios from 'axios'
import {  useSelector } from 'react-redux';

// COMPONENT
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import Loading from '../Video/Loading'
import ListComponent from './ListComponent'

// API SWAGGER
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './TipsList.css';

const FilterTab = ({
    title = "",
    onItemClicked = () => console.error('You passed no action'),
    isActive = false,
}) => {
    return (
        <div 
            className={isActive ? `filter choosen` : `filter`}
            onClick={onItemClicked}
        >
            {title}
        </div>
    );
};

const Tips = (props) => {

    // GLOBAL STATE
    const userInfo = useSelector(({ user }) => user.userMe);

    // LOCAL STATE
    const [tips,setTips] = useState(null)
    const [loading,setLoading] = useState(false)
    const [allT,setAllT] = useState(null)

    let renderTopic = () => {
        // console.log(userInfo , ' <<< USER INFO')
        let result = "topic="
        let arr = []
        if (userInfo.favorite_topics) {
            arr = [...userInfo.favorite_topics]
        }
        arr.forEach((e,i)=>{
            result+= e._id
            if (i!== arr.length -1) {
                result += "&topic="
            }
        })
        console.log(result , ' << VALUE QUERY')
        return result
    }

    const [tabList] = useState([
        {
            // id: 1,
            title: 'Terbaru',
            query: "sortby=expired_date&sortval=desc"
            // content: <Terbaru />,
        },
        {
            // id: 2,
            title: 'Rekomendasi',
            query: "trending=true"
            // content: <Rekomendasi />,
        },
        {
            // id: 3,
            title: 'Telah Ditonton',
            query: "sortby=expired_date&sortval=desc"
            // content: <TelahDitonton />,
        },
        {
            // id: 4,
            title: 'Sesuai Topik',
            query: renderTopic() 
            // content: <SesuaiTopik />,
        },
    ]);
    
    useEffect(()=>{
        document.title = 'LMS Tips';
        // document.title = 'LMS Video';
        getData(0)
    },[])

    let getData = (index) => {
        // console.log(tabList.filter((e,i)=>i=== index)[0].query , ' <<< query')
        // console.log(renderTopic() , ' <<< RENDER TOPIC')
        setLoading(true)
        let slug = props.location.pathname.split('/')[2]
        axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            // url : index < 3 ? `${SWAGGER_URL}/userproducts?content_post_type=video&as_user=false&${tabList.filter((e,i)=>i=== index)[0].query}` : 
            // `${SWAGGER_URL}/userproducts?content_post_type=video&as_user=false&${renderTopic()}` ,
            url : `${SWAGGER_URL}/lms/${slug}/tips`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            // setWebinarData(data.data)
            console.log(data.data , ' << VIDOE LIST')
            setLoading(false)
            setTips(data.data.tips_list)
            setAllT(data.data)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response)
        })
    }

    // HANDLE CHANGE TAB
    let handleTab = (el,index) => {
        console.log(index ,)
        setActive(index)
        getData(index)
    }

    let renderTab = () => {
        return tabList.map((el,index)=>{
            const {title} = el
            return (
                <div 
                    // className={isActive ? `filter choosen` : `filter`}
                    className={index === active ? "filter choosen" : "filter"}
                    onClick={e=>handleTab(el,index)}
                    // onClick={onItemClicked}
                >
                    {title}
                </div>
            )
        })
    }
    
    const shippingBook = 'https://static-cse.canva.com/blob/142538/Purple-and-Red-Leaves-Illustration-Childrens-Book-Cover.jpg';

    const renderShipment = () => {
        return (
            <div className='ship-group'>
                <img src={shippingBook} alt='book on shipping' className='shipping-book' />
                <div className='ship-desc'>
                    <div className='ship-address'>
                        <b>Alamat Pengiriman:</b>
                        <br/> Komplek Scientia Square, Jalan Darwin Timur. Ruko Darwin No 6, Medang, Kec. Pagedangan, Kota Tangerang Selatan, Banten 15339
                    </div>
                    <div className='ship-status'>
                        <b>Status :</b> Delivering
                    </div>
                    <button className='view-button'>
                        <b>View Tracking</b>
                    </button>
                </div>
            </div>
        );
    };

    const [active, setActive] = useState(1);

    return (
        <div className='root'>
            {/* WELCOME VIDEO */}
            <WelcomeVideo data={allT}/>

            {/* DIVIDER */}
            <div className='divider' />

            {/* SECTION CAROUSEL */}
            <TopicSection {...props} tipsTab={true} />

            {/* DIVIDER */}
            {/* <div className='divider' /> */}

            {/* SHIPMENT */}

            {/* <div className='shipment-container'>
                <div className='shipment-title'>
                    Pengiriman Buku
                </div>
                <div className='shipping-items'>
                    {renderShipment()}
                </div>
            </div> */}

            {/* DIVIDER */}
            <div className='divider' />

            {/* TIPS */}
            <div className='tips-container'>
                <div className='tips-title'>
                    Tips Untuk Kamu
                </div>
                {/* FILTER */}
                <div className='filter-container'>
                    {
                    renderTab()
                    }
                </div>
                <div className='tips-list'>
                    {
                        tips && !loading ?
                        <ListComponent
                            active={active}
                            setActive={setActive}
                            tips={tips}
                            slug={props.location.pathname.split('/')[2]}
                        /> : 
                        <Loading/>
                    }
                </div>
                
            </div>

            {/* FOOTER */}
            <div className='lms-tips-list-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Tips;
