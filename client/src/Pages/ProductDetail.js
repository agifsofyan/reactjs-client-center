import React, { useEffect } from 'react';
import {
    Header,
    BriefDesc,
    Description,
    Courses,
    Section,
    Ratings,
    Reviews,
    Bonus,
    Bottom,
} from '../Components/ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../Redux/Actions/ProductAction';

const ProductDetail = (query) => { 
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product.productListById);

    const id = query.location.search.split('=')[1];

    useEffect(() => {
        document.title = product.title;
        dispatch(getProductById(id));
    }, [dispatch, id, product.title]);

    return (
        <div>
            <Header
                title={product.title}
            />
            <BriefDesc
                title={product.title}
                detail={product.detail}
                price={product.price}
                discount={product.discount}
                discPrice={product.discPrice}
                video={product.video}
            />
            <Description
                image={product.image}
            />
            <Courses
                title={product.title}
            />
            <Section
                image={product.image}
            />
            <Ratings />
            <Reviews />
            <Bonus />
            <Bottom
                title={product.title}
                price={product.price}
                discount={product.discount}
                discPrice={product.discPrice}
            />
        </div>
    );
};

export default ProductDetail;
