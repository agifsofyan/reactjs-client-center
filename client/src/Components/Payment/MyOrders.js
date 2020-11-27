import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../Redux/Actions/CartAction';

const MyOrders = () => {
    const dispatch = useDispatch();

    const cartList = useSelector((state) => state.cart.cartList);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    const renderList = () => {
        return cartList.map((val,index) => {
            return (
                <tr key={index}>
                    {/* <td>
                        {index + 1}
                    </td>
                    <td>
                        {val.product_info.name}
                    </td>
                    <td>
                        Rp. {val.product_info.price.toLocaleString('id-ID')}
                    </td> */}
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        {val.quantity}
                    </td>
                    <td>
                        {val.product_info}
                    </td>
                </tr>
            );
        });
    };

    return (
        <div style={styles.container}>
            <div style={styles.title}>
                Kelas yang diikuti
            </div>
            <div>
                <Table bordered hover>
                    <thead>
                        <tr>
                            {/* <th>#</th>
                            <th>Product Name</th>
                            <th>Sale Price</th> */}
                            <th>#</th>
                            <th>Quantity</th>
                            <th>Product ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderList()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

const styles = {
    container: {
        margin: '0rem 5rem',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '2rem 0rem 1.5rem 0rem',
    },
};

export default MyOrders;
