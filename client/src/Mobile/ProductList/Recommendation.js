import React, { useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/ProductAction';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Recommendation = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const productList = useSelector((state) => state.product.productList);
    const loading = useSelector((state) => state.product.loading);

    const list = productList.slice(0,3);

    const settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderCard = () => {
        return list.map((val,index) => {
            return (
                <React.Fragment>
                    {
                        loading
                        ?
                        <Skeleton 
                            variant="rect" 
                            style={{
                                height: '25rem',
                                borderRadius: '15px',
                                margin: '3rem',
                            }}
                        />
                        :
                        <div key={index} style={styles.cardContainer}>
                            {/* <img src={val.image_url[0]} alt='card pic' style={styles.image} /> */}
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFgPwBh_IFT3-ZtcDlRAnkyHfxGU8Wj8ChQ&usqp=CAU' alt='card pic' style={styles.image} />
                            {/* <div>
                                TYPE : {val.type}
                            </div> */}
                            <div style={styles.title}>
                                {val.name}
                            </div>
                            <div style={styles.subtitle}>
                                {val.subheadline}
                            </div>
                            <div style={styles.priceContainer}>
                                <div style={styles.price}>
                                    Rp. {val.price}
                                </div>
                                <div style={styles.discount}>
                                    Hemat 80%
                                </div>
                                <div style={styles.discPrice}>
                                    Rp. {val.sale_price}
                                </div>
                            </div>
                            <a href={`/product-detail?slug=${val.slug}`} key={val.id} style={{textDecoration:'none'}}>
                                <div style={styles.joinBtn}>
                                    JOIN
                                </div>
                            </a>
                        </div>
                    }
                </React.Fragment>
            );
        });
    };

    return (
        <div>
            <div style={styles.header}>
                Recommendation
            </div>
            <Slider {...settings}>
                {renderCard()}
            </Slider>
            <div style={styles.separator} />
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontWeight: '600',
        marginTop: '1.5rem',
    },
    separator: {
        borderBottom: '0.1rem solid #a4a4a4',
        marginTop: '1.5rem',
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
        flex: 1,
    },
    cardContainer: {
        border: '1px solid #8F8F8F',
        borderRadius: '0.5rem',
        margin: '2rem 3.5rem 1rem 3.5rem',
    },
    image: {
        borderRadius: '0.5rem 0.5rem 0 0',
        width: '100%',
        height: '20rem',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.15rem',
        fontWeight: '600',
        marginTop: '0.5rem',
    },
    subtitle: {
        display: 'flex',
        justifyContent: 'center',
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    price: {
        margin: '0.7rem 0.9rem',
        fontSize: '0.9rem',
        padding: '0.4rem 0rem',
        textDecoration: 'line-through',
        textDecorationColor: 'red',
    },
    discount: {
        color: 'white',
        margin: '0.75rem 0.9rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        borderRadius: '0.5rem',
        padding: '0.4rem',
        backgroundColor: '#464646',
    },
    discPrice: {
        margin: '0.7rem 0.9rem',
        fontSize: '0.9rem',
        padding: '0.4rem 0rem',
    },
    joinBtn: {
        height: '2rem',
        paddingTop: '0.3rem',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        margin: '0.5rem',
        color: 'white',
        fontWeight: '600',
        borderRadius: '0.5rem',
        backgroundColor: '#ff4500',
        boxShadow: '0 0 5px #ff4500',
    },
};

export default Recommendation;
