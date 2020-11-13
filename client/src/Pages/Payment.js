import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin } from '../Redux/Actions/UserAction';
import {
    Header,
    MyOrders,
    Methods,
} from '../Components/Payment';

const Payment = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);
    const loggedIn = useSelector((state) => state.user.loggedIn);
    console.log(loggedIn);

    useEffect(() => {
        document.title = `Payment Method`;
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    return (
        <div>
            <Header
                name={userData.name}
            />
            <MyOrders />
            <Methods />
        </div>
    );
};

export default Payment;
