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
    // console.log(`product id : ${product}`);

    const slug = query.location.search.split('=')[1];

    const rounded = (num) => {
        let roundedString = num.toFixed(2);
        let round = Number(roundedString);
        return round;
    };

    useEffect(() => {
        document.title = 'Product Detail';
        dispatch(getProductBySlug(slug));
    }, [dispatch, slug]);

    return (
        <div>
            <Header
                headline={product.name}
            />
            <BriefDesc
                type={product.type}
                id={product._id}
                headline={product.name}
                description={product.description}
                price={product.price}
                discount={rounded(100-((product.sale_price/product.price)*100))}
                sale_price={product.sale_price}
                video={product.video} // sementara blm ada video
            />
            <Description
                image_url={product.image_url !== undefined && product.image_url[0]}
            />
            <Courses
                title={product.title}
            />
            <Section />
            <Ratings />
            <Reviews />
            <Bonus />
            <Bottom
                headline={product.name}
                price={product.price}
                sale_price={product.sale_price}
                id={product._id}
            />
        </div>
    );
};

export default ProductDetail;
