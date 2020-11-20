import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlug } from '../Redux/Actions/ProductAction';
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

const ProductDetail = (query) => { 
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product.productListById);

    const slug = query.location.search.split('=')[1];

    useEffect(() => {
        document.title = 'Product Detail';
        dispatch(getProductBySlug(slug));
    }, [dispatch, slug]);

    return (
        <div>
            <Header
                headline={product.headline}
            />
            <BriefDesc
                type={product.type}
                headline={product.headline}
                description={product.description}
                price={product.price}
                sale_price={product.sale_price}
                video={product.video}
            />
            <Description
                image_url={product.image_url !== undefined && product.image_url[0]}
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
                headline={product.headline}
                price={product.price}
                sale_price={product.sale_price}
            />
        </div>
    );
};

export default ProductDetail;
