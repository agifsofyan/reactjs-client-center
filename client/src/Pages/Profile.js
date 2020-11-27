import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin } from '../Redux/Actions/UserAction';
import { Header } from '../Components/Profile';
import { Form, Input, Button } from 'semantic-ui-react';
import { fetchAddress, fetchAddressById, putAddress } from '../Redux/Actions/ProfileAction';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

const Profile = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);
    const addressData = useSelector((state) => state.profile.addressList);
    // console.log(`ini dari page ${addressData.title} id: ${addressData._id}`);
    console.log(userData);

    const [form, setForm] = useState({
        title: '',
        province: '',
        city: '',
        districts: '',
        sub_district: '',
        detail_address: '',
        postal_code: 0,
    });

    useEffect(() => {
        document.title = 'My Profile';
        dispatch(fetchAddress());
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAddressById(addressData._id));
    }, [dispatch, addressData._id]);

    const handleChange = (e) => {
        let capsText = e.target.value
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substr(1))
            .join(' ');
        setForm({
            ...form,
            [e.target.name]: capsText,
        });
    };

    const handleSubmit = () => {
        const {
            title,
            province,
            city,
            districts,
            sub_district,
            detail_address,
            postal_code,
        } = form;
        if (title && province && city && districts && sub_district && detail_address && postal_code) {
            dispatch(putAddress(form));
            Swal.fire(
                'Success!',
                'Address data has been saved!',
                'success',
            );
        } else {
            Swal.fire(
                'Oops!',
                'Please fill in all the required fields!',
                'error',
            );
        }
    };

    // const renderAddress = () => {};

    return (
        <div>
            <Header 
                name={userData.name}
            />
            {/* USER DATA */}
            <div style={styles.container}>
                <div style={styles.bioSection}>
                    <div style={styles.title1}>
                        {userData.name}'s Profile
                    </div>
                    <div style={styles.data}>
                        <img src={userData.avatar} alt='avatar' style={styles.avatar} />
                        <div style={styles.details}>
                            <div style={styles.bio}>
                                <b>Name</b> : {userData.name}
                            </div>
                            <div style={styles.bio}>
                                <b>Email</b> : {userData.email}
                            </div>
                            <div style={styles.bio}>
                                <b>Phone Number</b> : {userData.phone_number}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ADRESS DETAILS */}
            <div style={styles.detailsContainer}>
                <div style={styles.title2}>
                    {addressData.title} Address
                </div>
                <div style={styles.addressDetails}>
                    <div className='d-flex'>
                        <div style={styles.location}>
                            <b>Province</b> : {addressData.province}
                        </div>
                        <div style={styles.location}>
                            <b>City</b> : {addressData.city}
                        </div>
                        <div style={styles.location}>
                            <b>District</b> : {addressData.districts}
                        </div>
                        <div style={styles.location}>
                            <b>Sub District</b> : {addressData.sub_district}
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div style={styles.location}>
                            <b>Address Detail</b> : {addressData.detail_address}
                        </div>
                        <div style={styles.location}>
                            <b>Postal Code</b> : {addressData.postal_code}
                        </div>
                    </div>
                </div>
            </div>
            {/* ADDRESS FORM */}
            <div style={styles.addressContainer}>
                <div style={styles.title3}>
                    Add Address Details
                </div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            required={true}
                            control={Input}
                            name='title'
                            label='Title'
                            placeholder='Title'
                            onChange={handleChange}
                            normalize={value => (value || '').toUpperCase()}
                        />
                        <Form.Field
                            required={true}
                            control={Input}
                            name='province'
                            label='Province'
                            placeholder='Province'
                            onChange={handleChange}
                        />
                        <Form.Field
                            required={true}
                            control={Input}
                            name='city'
                            label='City'
                            placeholder='City'
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            required={true}
                            control={Input}
                            name='districts'
                            label='District'
                            placeholder='District'
                            onChange={handleChange}
                        />
                        <Form.Field
                            required={true}
                            control={Input}
                            name='sub_district'
                            label='Sub District'
                            placeholder='Sub District'
                            onChange={handleChange}
                        />
                        <Form.Field
                            required={true}
                            control={Input}
                            name='detail_address'
                            label='Address Detail'
                            placeholder='Address Detail'
                            onChange={handleChange}
                        />
                        <Form.Field
                            required={true}
                            control={Input}
                            type='number'
                            name='postal_code'
                            label='Postal Code'
                            placeholder='Postal Code'
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
                <div style={styles.button}>
                    <Button onClick={handleSubmit} secondary>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    // User Details
    container: {
        display: 'flex',
        // justifyContent: 'center',
        paddingBottom: '1rem',
        margin: '0rem 8rem',
    },
    bioSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title1: {
        display: 'flex',
        // justifyContent: 'center',
        fontSize: '1.3rem',
        fontWeight: '600',
        margin: '1rem 0rem',
    },
    data: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        boxShadow: '0 0 0.5rem #BABABA',
        borderRadius: '1.5rem',
        height: '11.5rem',
    },
    details: {
        margin: '0rem 2rem',
    },
    bio: {
        borderRadius: '0.5rem',
        backgroundColor: '#f4f4f4',
        padding: '0.8rem 1.25rem',
        margin: '1rem 0rem',
    },
    // Address Details
    detailsContainer: {
        margin: '0rem 8rem',
        padding: '1rem 0rem',
    },
    title2: {
        display: 'flex',
        // justifyContent: 'center',
        fontSize: '1.3rem',
        fontWeight: '600',
        marginLeft: '1rem',
        marginBottom: '1rem',
    },
    addressDetails: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    location: {
        boxShadow: '0 0 0.15rem grey',
        // backgroundColor: '#f4f4f4',
        borderRadius: '0.5rem',
        padding: '0.8rem 1.25rem',
        margin: '1rem 1rem',
    },
    // Add/Edit Address
    addressContainer: {
        margin: '0rem 8rem',
    },
    title3: {
        display: 'flex',
        // justifyContent: 'center',
        fontSize: '1.3rem',
        fontWeight: '600',
        margin: '1.5rem 0rem',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
    },
};

export default Profile;
