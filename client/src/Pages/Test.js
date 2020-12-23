import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContent } from '../Redux/Actions/ContentAction';
import Cookies from 'js-cookie';

const Test = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContent());
    }, [dispatch]);

    Cookies.set('message', 'Hello World', { path: '/' });

    const allCookies = Cookies.get('message');
    const cookieData = allCookies.length === undefined ? null : allCookies;
    // console.log(cookieData);

    return (
        <div>
            <div>
                hi, this is test page
            </div>
            {cookieData}
        </div>
    );
};

export default Test;