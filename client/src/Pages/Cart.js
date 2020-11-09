import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin } from '../Redux/Actions/UserAction';
import {
    Header,
    User,
    ShoppingCart,
} from '../Components/Cart';

const Cart = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);

    useEffect(() => {
        document.title = `My Cart`;
        let token = localStorage.getItem('token');
        dispatch(keepLogin(token));;
    }, [dispatch]);

    return (
        <div>
            <Header
                name={userData.name}
            />
            <User
                name={userData.name}
                email={userData.email}
                phone_number={userData.phone_number}
            />
            <ShoppingCart />
        </div>
    );
};

export default Cart;
