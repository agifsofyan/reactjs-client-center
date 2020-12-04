import React, { useEffect } from 'react';
import { getProducts } from '../Redux/Actions/ProductAction';
import { useDispatch} from 'react-redux';
import MediaQuery from 'react-responsive';
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
import {
    HeaderMobile,
    List,
    Recommend,
    Formats,
} from '../Mobile/ProductList';

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Product List';
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            {/* is Desktop */}
            <MediaQuery minDeviceWidth={1224}>
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
            </MediaQuery>
            {/* is Mobile */}
            <MediaQuery maxDeviceWidth={1224}>
                <HeaderMobile />
                <List />
                <Recommend />
                <Formats />
            </MediaQuery>
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
