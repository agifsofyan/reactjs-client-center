import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from '../Redux/Actions/ContentAction';
import Cookies from 'js-cookie';

const Test = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContent());
    }, [dispatch]);

    const contentList = useSelector((state) => state.content.contentList);

    Cookies.set('content', contentList);
    const cookieData = JSON.parse(Cookies.get('content'));
    console.log(cookieData);

    const renderContent = () => {
        return cookieData.map((val,index) => {
            return (
                <div key={index} className='d-flex'>
                    <img src={val.cover_img} alt='content pic' style={styles.contentImg} />
                    <div style={{flexDirection:'column'}}>
                        <div>{val.name}</div>
                        <div>{null ? null : val.content}</div>
                    </div>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <div>
                {renderContent()}
            </div>
            <Modal 
                title="Basic Modal" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </React.Fragment>
    );
};

const styles = {
    contentImg: {
        height: '5rem',
    },
};

export default Test;