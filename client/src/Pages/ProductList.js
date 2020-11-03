import React, { useEffect } from 'react';
import { getProducts } from '../Redux/Actions/ProductAction';
import { useDispatch} from 'react-redux';
import {
    Header,
    Sort,
    Description,
    Card,
    Recommendation,
    Ratings,
    Reviews,
    BottomList,
    Footer,
} from '../Components/ProductList';

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Product List';
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Sort />
            <Description />
            <Card />
            <Recommendation />
            <div style={styles.isRow}>
                <div style={styles.isColumn}>
                    <Ratings />
                    <Reviews />
                </div>
                <BottomList />
            </div>
            <Footer />
        </div>
    );
};

const styles = {
    isColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    isRow: {
        display: 'flex',
    },
};

export default ProductList;
