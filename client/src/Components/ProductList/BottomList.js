import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/ProductAction';
import star from '../../Assets/star-filled.png';

const BottomList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const productGetList = useSelector((state) => state.product.productGetList);

    const list = productGetList.slice(0,3);

    const renderItems = () => {
        return list.map((val,index) => {
            return (
                <div key={index} style={styles.itemContainer}>
                    <img src={val.image} alt='item pic' height={175} width={175} style={{borderRadius:'1em'}} />
                    <div style={styles.titleDesc}>
                        <div style={styles.title}>
                            {val.title}
                        </div>
                        <div style={styles.description}>
                            {val.description}
                        </div>
                        <div style={styles.ratingWrapper}>
                            <div style={styles.starRating}>
                                <img src={star} alt='star' height={15} style={{margin:'0em 0.1em'}} />
                                <img src={star} alt='star' height={15} style={{margin:'0em 0.1em'}} />
                                <img src={star} alt='star' height={15} style={{margin:'0em 0.1em'}} />
                                <img src={star} alt='star' height={15} style={{margin:'0em 0.1em'}} />
                                <img src={star} alt='star' height={15} style={{margin:'0em 0.1em'}} />
                            </div>
                            <div style={styles.numberRating}>
                                5/5
                            </div>
                        </div>
                        <div style={styles.wrapper}>
                            <div style={styles.bottomWraper}>
                                <div style={styles.price}>
                                    {val.price}
                                </div>
                                <div style={styles.discPrice}>
                                    {val.discPrice}
                                </div>
                            </div>
                            <div style={styles.discBox}>
                                <div style={styles.discount}>
                                    {val.discount}
                                </div>
                            </div>
                            <div style={styles.joinBox}>
                                <div style={styles.joinTxt}>
                                    Join Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            {renderItems()}
        </div>
    );
};

const styles = {
    itemContainer: {
        display: 'flex',
        margin: '2em 3em',
        width: '40em',
    },
    titleDesc: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '2em',
    },
    title: {
        fontSize: '1.1em',
        fontWeight: '600',
    },
    description: {
        fontSize: '0.9em',
        margin: '0.5em 0em',
    },
    ratingWrapper: {
        display: 'flex',
        marginTop: '0.2em',
    },
    starRating: {
        display: 'flex',
    },
    numberRating: {
        fontSize: '0.9em',
        fontWeight: '600',
        marginLeft: '0.5em',
        marginTop: '-0.25em',
    },
    wrapper: {
        marginTop: '0.5em',
        display: 'flex',
    },
    bottomWraper: {
        display: 'flex',
        flexDirection: 'column',
    },
    price: {
        textDecoration: 'line-through',
        textDecorationColor: 'red',
    },
    discPrice: {
        fontWeight: '600',
    },
    discBox: {
        height: '1.8em',
        margin: '0.5em 1em',
        borderRadius: '0.5em',
        backgroundColor: '#787878',
        padding: '0.1em 0.4em'
    },
    discount: {
        color: 'white',
    },
    joinBox: {
        display: 'flex',
        justifyContent: 'center',
        height: '2.5em',
        width: '10em',
        backgroundColor: '#ff4500',
        borderRadius: '0.7em',
        boxShadow: '0 0 5px #ff4500',
        marginLeft: '0.5em',
    },
    joinTxt: {
        paddingTop: '0.35em',
        color: 'white',
        fontSize: '1.1em',
        fontWeight: '600',
    },
};

export default BottomList;
