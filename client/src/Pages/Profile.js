import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin } from '../Redux/Actions/UserAction';

const token = localStorage.getItem('token');

const Profile = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);
    console.log(userData);

    useEffect(() => {
        document.title = 'My Profile';
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    return (
        <div>
            ini profile page
        </div>
    );
};

export default Profile;
