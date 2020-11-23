import React from 'react';
import { useSelector } from 'react-redux';
import star from '../../Assets/Images/star-filled.png';

const BriefDesc = (props) => {
    const loading = useSelector((state) => state.product.loading);

    return (
        <div style={styles.container}>
            {/* LEFT start */}
            <div style={styles.wrapper}>
                <div style={styles.topic}>
                    Type : {props.type}
                </div>
                <div style={styles.title}>
                    {props.headline}
                </div>
                <div style={styles.detail}>
                    {props.description}
                </div>
                <div style={styles.ratingWrapper}>
                    <div style={styles.starRating}>
                        <img src={star} alt='star' style={{margin:'0rem 0.1rem', height:'1rem'}} />
                        <img src={star} alt='star' style={{margin:'0rem 0.1rem', height:'1rem'}} />
                        <img src={star} alt='star' style={{margin:'0rem 0.1rem', height:'1rem'}} />
                        <img src={star} alt='star' style={{margin:'0rem 0.1rem', height:'1rem'}} />
                        <img src={star} alt='star' style={{margin:'0rem 0.1rem', height:'1rem'}} />
                    </div>
                    <div style={styles.tags}>
                        Best Seller
                    </div>
                    <div style={styles.tags}>
                        Bisnis
                    </div>
                </div>
                <div style={styles.priceContainer}>
                  <div style={styles.price}>
                    Rp. {props.price}
                  </div>
                  <div style={styles.discount}>
                    Hemat 80%
                  </div>
                  <div style={styles.discPrice}>
                    Rp. {props.sale_price}
                  </div>
                </div>
            </div>
            {/* LEFT end */}
            {/* RIGHT start */}
            <div style={styles.videoDiv}>
                {
                    loading
                    ?
                    <img src="https://www.btklsby.go.id/images/placeholder/basic.png" alt='placeholder' style={{width:'24rem', height:'13.5rem'}} />
                    :
                    <iframe 
                        style={{width:'30rem', height:'13.5rem'}}
                        title={props.title} 
                        src={props.video} 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                }
            </div>
            {/* RIGHT end */}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        marginTop: '0.1rem',
        height: '18rem',
        backgroundColor: '#F3F3F3',
    },
    // LEFT start
    wrapper: {
        width: '45rem',
        marginLeft: '10rem',
    },
    topic: {
        color: '#033E66',
        fontWeight: '500',
        paddingTop: '1.5rem',
    },
    title: {
        fontSize: '1.35rem',
        fontWeight: '600',
        padding: '0.5rem 0rem',
    },
    detail: {
        fontSize: '0.9rem',
    },
    ratingWrapper: {
        display: 'flex',
        marginTop: '0.75rem',
    },
    starRating: {
        display: 'flex',
        padding: '0.2rem 0rem',
    },
    tags: {
        color: '#ffffff',
        fontSize: '0.8rem',
        fontWeight: '500',
        marginLeft: '1rem',
        padding: '0.2rem 0.3rem',
        borderRadius: '0.35rem',
        backgroundColor: '#ff4500',
    },
    priceContainer: {
        display: 'flex',
    },
    price: {
        margin: '0.75rem 0rem',
        fontSize: '1.15rem',
        textDecoration: 'line-through',
        textDecorationColor: 'red',
    },
    discount: {
        color: 'white',
        margin: '0.7rem 2rem',
        fontSize: '0.9rem',
        fontWeight: '600',
        borderRadius: '0.5rem',
        padding: '0.4rem',
        backgroundColor: '#464646',
    },
    discPrice: {
        margin: '0.7rem 0rem',
        fontSize: '1.2rem',
        fontWeight: '500',
    },
    // LEFT end
    // RIGHT start
    videoDiv: {
        marginTop: '2rem',
        marginLeft: '-10rem',
    },
    // RIGHT end
};

export default BriefDesc;
