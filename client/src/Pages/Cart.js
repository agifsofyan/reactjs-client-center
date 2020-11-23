import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin } from '../Redux/Actions/UserAction';
import {
    Header,
    UserProfile,
    Contents,
    LoginForm,
} from '../Components/Cart';

const Cart = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);
    const loggedIn = useSelector((state) => state.user.loggedIn);

    useEffect(() => {
        document.title = `My Cart`;
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    return (
        <div>
            <Header
                name={userData.name}
            />
            {
                loggedIn
                ?
                <UserProfile
                    name={userData.name}
                    email={userData.email}
                    phone_number={userData.phone_number}
                />
                :
                <LoginForm />
            }
            {
                loggedIn
                ?
                <>
                    {/* <ShoppingCart />
                    <OrderBump />
                    <Summary /> */}
                    <Contents />
                </>
                :
                null
            }
        </div>
    );
};

export default Cart;
