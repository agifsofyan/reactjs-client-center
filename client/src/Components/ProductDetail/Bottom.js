import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addToCart } from '../../Redux/Actions/CartAction';

const Bottom = (props) => {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product.productListById);
    const success = useSelector((state) => state.cart.success);

    const handleAddToCart = () => {
        dispatch(addToCart(product._id));
        window.location.href = '/cart';
    };

    if (success) {
        return (
            <Redirect to='/cart' />
        );
    }
    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <div style={styles.prodWrapper}>
                    <span style={styles.title}>
                        {props.headline}
                    </span>
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
                <div style={styles.joinBtn} onClick={handleAddToCart}>
                    <div style={styles.joinTxt}>
                        JOIN SEKARANG
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f3f3f3',
        height: '10rem',
    },
    wrapper: {
        display: 'flex',
        height: '10rem',
    },
    prodWrapper: {
        width: '25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem 4rem',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '23rem',
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
    joinBtn: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20rem',
    },
    joinTxt: {
        cursor: 'pointer',
        color: 'white',
        fontWeight: '600',
        fontSize: '1.5rem',
        borderRadius: '1rem',
        padding: '0.5rem 3rem',
        backgroundColor: '#ff4500',
        boxShadow: '0 0 5px #ff4500',
    },
};

export default Bottom;
