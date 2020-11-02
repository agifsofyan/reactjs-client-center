import React, { useEffect } from 'react';
import { Header, Sort, Card } from '../Components/ProductList';
import { useDispatch} from 'react-redux';
import { getProducts } from '../Redux/Actions/ProductAction';

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
            <Card />
        </div>
    );
};

export default ProductList;
