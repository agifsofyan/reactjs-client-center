import React, { useEffect, useState } from 'react';
import moment from 'moment';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import './TipsList.css';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogList } from '../../Redux/Actions';

const author = 'https://i.pinimg.com/originals/e0/bc/5c/e0bc5cd4f1d7cff7116a325490b3010d.png';
const ago = moment().utc('2019-12-04 12:00:24').local().startOf('seconds').fromNow();
const tick = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png';

const Terbaru = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogList());
    }, [dispatch]);

    const blogList = useSelector(({ content }) => content.blogList);

    const renderBlogList = () => {
        return blogList.map((val,index) => {
            return (
                <a href={`/lms-tips-detail?id=${val._id}`} style={{color:'black'}}>
                    <div key={index} className='tips-group'>
                        <img 
                            src='https://static-cse.canva.com/blob/142565/Blue-Orange-and-Yellow-Cool-Memoir_Inspirational-Book-Cover.jpg' 
                            alt='book on shipping' 
                            className='tips-book' 
                        />
                        <div className='tips-desc'>
                            <div className='tips-detail'>
                                <b>{val.title}</b>
                                {
                                    index === 0
                                    ? <img src={tick} alt='tick' className='tips-checkmark' />
                                    : null
                                }
                                <br/>
                                {val.desc}
                            </div>
                            <div className='tips-poin'>
                                <b>+3 Poin</b>
                            </div>
                            <div className='author-details'>
                                <img src={author} alt='author' className='author-profile' />
                                <div className='author-name-time'>
                                    John Doe ● {ago} ● 5 min read
                                </div>
                            </div>
                            <div style={{marginTop:'10px'}}>
                                {val._id}
                            </div>
                        </div>
                    </div>
                </a>
            );
        });
    };

    return (
        <div>
            {renderBlogList()}
        </div>
    );
};

const Rekomendasi = () => {
    return [0,1,2,3,4].map((val,index) => {
        return (
            <div key={index} className='tips-group'>
                <img 
                    src='https://static-cse.canva.com/blob/142533/Red-and-Beige-Cute-Illustration-Young-Adult-Book-Cover.jpg' 
                    alt='book on shipping' 
                    className='tips-book' 
                />
                <div className='tips-desc'>
                    <div className='tips-detail'>
                        <b>To Kill a Mockingbird</b>
                        {
                            index === 0
                            ?
                            <img src={tick} alt='tick' className='tips-checkmark' />
                            :
                            null
                        }
                        <br/> it is set in the mid-1930s in the small town of Maycomb, Alabama. It is narrated by Scout Finch, a six-year-old tomboy who lives with her lawyer father Atticus and her ten-year-old brother Jem, trying to make a scene.
                    </div>
                    <div className='tips-poin'>
                        <b>+3 Poin</b>
                    </div>
                    <div className='author-details'>
                        <img src={author} alt='author' className='author-profile' />
                        <div className='author-name-time'>
                            John Doe ● {ago} ● 5 min read
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const TelahDibaca = () => {
    return [0,1,2,3,4].map((val,index) => {
        return (
            <div key={index} className='tips-group'>
                <img 
                    src='https://static-cse.canva.com/blob/142564/Colorful-Illustration-Young-Adult-Book-Cover.jpg' 
                    alt='book on shipping' 
                    className='tips-book' 
                />
                <div className='tips-desc'>
                    <div className='tips-detail'>
                        <b>To Kill a Mockingbird</b>
                        {
                            index === 0
                            ?
                            <img src={tick} alt='tick' className='tips-checkmark' />
                            :
                            null
                        }
                        <br/> it is set in the mid-1930s in the small town of Maycomb, Alabama. It is narrated by Scout Finch, a six-year-old tomboy who lives with her lawyer father Atticus and her ten-year-old brother Jem, trying to make a scene.
                    </div>
                    <div className='tips-poin'>
                        <b>+3 Poin</b>
                    </div>
                    <div className='author-details'>
                        <img src={author} alt='author' className='author-profile' />
                        <div className='author-name-time'>
                            John Doe ● {ago} ● 5 min read
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const SesuaiTopik = () => {
    return [0,1,2,3,4].map((val,index) => {
        return (
            <div key={index} className='tips-group'>
                <img 
                    src='https://assets-1.placeit.net/smart_templates/991156c4737dbc9fcf89acfabe9034a0/assets/sa31iylakfbx922u5mn901a16dym9pxk.jpg' 
                    alt='book on shipping' 
                    className='tips-book' 
                />
                <div className='tips-desc'>
                    <div className='tips-detail'>
                        <b>To Kill a Mockingbird</b>
                        {
                            index === 0
                            ?
                            <img src={tick} alt='tick' className='tips-checkmark' />
                            :
                            null
                        }
                        <br/> it is set in the mid-1930s in the small town of Maycomb, Alabama. It is narrated by Scout Finch, a six-year-old tomboy who lives with her lawyer father Atticus and her ten-year-old brother Jem, trying to make a scene.
                    </div>
                    <div className='tips-poin'>
                        <b>+3 Poin</b>
                    </div>
                    <div className='author-details'>
                        <img src={author} alt='author' className='author-profile' />
                        <div className='author-name-time'>
                            John Doe ● {ago} ● 5 min read
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const tabList = [
    {
        id: 1,
        title: 'Terbaru',
        content: <Terbaru />,
    },
    {
        id: 2,
        title: 'Rekomendasi',
        content: <Rekomendasi />,
    },
    {
        id: 3,
        title: 'Telah Dibaca',
        content: <TelahDibaca />,
    },
    {
        id: 4,
        title: 'Sesuai Topik',
        content: <SesuaiTopik />,
    },
];

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

const Tips = () => {
    useEffect(() => {
        document.title = 'LMS Tips';
    });

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
            <WelcomeVideo />

            {/* DIVIDER */}
            <div className='divider' />

            {/* SECTION CAROUSEL */}
            <TopicSection tipsTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* SHIPMENT */}
            <div className='shipment-container'>
                <div className='shipment-title'>
                    Pengiriman Buku
                </div>
                <div className='shipping-items'>
                    {renderShipment()}
                </div>
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* TIPS */}
            <div className='tips-container'>
                <div className='tips-title'>
                    Tips Untuk Kamu
                </div>
                <div className='filter-container'>
                    {tabList.map(({ id, title }) => 
                        <FilterTab 
                            key={title}
                            title={title}
                            onItemClicked={() => setActive(id)}
                            isActive={active === id}
                        />
                    )}
                </div>
                <div className='tips-list'>
                    {tabList.map(({ id, content }) => {
                        return active === id
                        ? content
                        : null
                    })}
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
