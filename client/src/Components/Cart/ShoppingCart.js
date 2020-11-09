import React from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from '../../Redux/Actions/CartAction';

const ShoppingCart = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <div style={styles.container}>
            ini cartnya
        </div>
    );
};

const styles = {
    container: {
        margin: '0rem 3rem',
    },
};

export default ShoppingCart;
