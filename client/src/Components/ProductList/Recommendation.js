import React from 'react';
import recommend from '../../Assets/recommend.jpg';
import star from '../../Assets/star-filled.png';
import share from '../../Assets/share.png';
import cart from '../../Assets/shopping-cart-white.png';

const Recommendation = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                Kelas Rekomendasi
            </div>
            <div style={styles.wrapper}>
                <div style={styles.box}>
                    <img src={recommend} alt='recommend' style={styles.image} />
                    {/* Content START */}
                    <div style={styles.contentWrap}>
                        <div style={styles.name}>
                            Work Less, Earn More Book
                        </div>
                        <div style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida faucibus tellus quis consequat. Fusce vitae odio malesuada, pellentesque erat sed, gravida ligula. Morbi non diam nulla. Morbi pellentesque tortor.
                        </div>
                        <div style={styles.ratingWrapper}>
                            <div style={styles.starRating}>
                                <img src={star} alt='star' height={25} style={{margin:'0em 0.2em'}} />
                                <img src={star} alt='star' height={25} style={{margin:'0em 0.2em'}} />
                                <img src={star} alt='star' height={25} style={{margin:'0em 0.2em'}} />
                                <img src={star} alt='star' height={25} style={{margin:'0em 0.2em'}} />
                                <img src={star} alt='star' height={25} style={{margin:'0em 0.2em'}} />
                            </div>
                            <div style={styles.numberRating}>
                                5/5
                            </div>
                        </div>
                        <div style={styles.priceWrapper}>
                            <div style={styles.oriPrice}>
                                Rp 1.900.000
                            </div>
                            <div style={styles.discount}>
                                Hemat Rp 1.690.000
                            </div>
                            <div style={styles.discPrice}>
                                Rp 210.000
                            </div>
                        </div>
                        <div style={styles.buttonWrapper}>
                            <div style={styles.shareBox}>
                                <img src={share} alt='share icon' style={styles.shareIcon} />
                            </div>
                            <div style={styles.cartBox}>
                                <img src={cart} alt='cart icon' style={styles.cartIcon} />
                            </div>
                            <div style={styles.joinBox}>
                                <div style={styles.joinTxt}>Join Now</div>
                            </div>
                        </div>
                    </div>
                    {/* Content END */}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        margin: '1em 0em',
    },
    title: {
        fontSize: '1.5em',
        fontWeight: '600',
        color: '#033e66',
        marginLeft: '2.5em',
    },
    wrapper: {
        padding: '0em 3.5em',
    },
    box: {
        backgroundColor: '#f6f6f6',
        borderRadius: '1.5em',
        display: 'flex',
        marginTop: '1em',
        height: '20em',
        width: '100%',
    },
    image: {
        height: '85%',
        margin: '1.5em',
        borderRadius: '1.5em',
    },
    contentWrap: {
        flexDirection: 'column',
        marginTop: '1.5em',
        marginLeft: '2em',
    },
    name: {
        fontSize: '1.3em',
        fontWeight: '600',
    },
    description: {
        marginTop: '0.6em',
        fontSize: '1em',
    },
    ratingWrapper: {
        display: 'flex',
        marginTop: '1.5em',
    },
    starRating: {
        display: 'flex',
    },
    numberRating: {
        fontSize: '1.2em',
        fontWeight: '700',
        marginLeft: '1em',
    },
    priceWrapper: {
        display: 'flex',
        marginTop: '1.5em',
    },
    oriPrice: {
        fontSize: '1.5em',
        paddingRight: '1em',
        textDecoration: 'line-through',
        textDecorationColor: 'red',
    },
    discount: {
        color: 'white',
        backgroundColor: '#464646',
        borderRadius: '0.75em',
        padding: '0.5em 0.75em',
        fontWeight: '500',
    },
    discPrice: {
        fontSize: '1.5em',
        fontWeight: '600',
        paddingLeft: '1em',
    },
    buttonWrapper: {
        display: 'flex',
        marginTop: '1.5em',
    },
    shareBox: {
        cursor: 'pointer',
        height: '2.5em',
        width: '2.5em',
        backgroundColor: '#ff4500',
        borderRadius: '0.75em',
        boxShadow: '0 0 5px #ff4500',
    },
    shareIcon: {
        height: '1.75em',
        margin: '0.35em 0 0 0.3em',
    },
    cartBox: {
        cursor: 'pointer',
        height: '2.5em',
        width: '2.5em',
        backgroundColor: '#ff4500',
        borderRadius: '0.75em',
        marginLeft: '1em',
        boxShadow: '0 0 5px #ff4500',
    },
    cartIcon: {
        height: '1.75em',
        margin: '0.35em 0 0 0.3em',
    },
    joinBox: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        height: '2.5em',
        width: '40vw',
        backgroundColor: '#ff4500',
        borderRadius: '0.75em',
        marginLeft: '1em',
        boxShadow: '0 0 5px #ff4500',
    },
    joinTxt: {
        color: 'white',
        fontSize: '1.2em',
        fontWeight: '650',
        marginTop: '0.2em',
    },
};

export default Recommendation;
