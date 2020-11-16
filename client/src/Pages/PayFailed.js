import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../Components/PayFailed';
import { keepLogin } from '../Redux/Actions/UserAction';

const PaySuccess = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);

    useEffect(() => {
        document.title = `Successful`;
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
        </div>
    );
};

export default PaySuccess;
