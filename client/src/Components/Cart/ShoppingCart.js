import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getCart, removeCart } from '../../Redux/Actions/CartAction';

const ShoppingCart = () => {
    const dispatch = useDispatch();

    const cartList = useSelector((state) => state.cart.cartList);
    console.log(cartList);

    const [update, setUpdate] = useState(false);

    React.useEffect(() => {
        dispatch(getCart());
        if (update) {
            setUpdate(false);
        }
    }, [dispatch, update]);

    const rounded = (num) => {
        let roundedString = num.toFixed(2);
        var round = Number(roundedString);
        return round;
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        })
        .then((res) => {
            if (res.value) {
                Swal.fire(
                    'Deleted!',
                    'Product has been deleted.',
                    'success',
                );
                dispatch(removeCart(id));
                setUpdate(true);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    };

    // const renderCart = () => {
    //     return cartList.map((val,index) => {
    //         return (
    //             <tr key={index}>
    //                 <td>
    //                     {index + 1}
    //                 </td>
    //                 <td>
    //                     {val.product_info.name}
    //                 </td>
    //                 <td>
    //                     Rp. {val.product_info.price}
    //                 </td>
    //                 <td>
    //                     Hemat {rounded((val.product_info.sale_price/val.product_info.price)*100 )}%
    //                 </td>
    //                 <td>
    //                     Rp. {val.product_info.sale_price}
    //                 </td>
    //                 <td>
    //                     <Button variant="outline-danger" onClick={() => handleDelete(val.product_info._id)}>
    //                         Remove
    //                     </Button>
    //                 </td>
    //             </tr>
    //         );
    //     });
    // };

    const renderCart = () => {
        return cartList.map((val,index) => {
            return (
                <tr key={index}>
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        {val.product_info.name}
                    </td>
                    <td>
                        Rp. {val.product_info.price}
                    </td>
                    <td>
                        Hemat {rounded((val.product_info.sale_price/val.product_info.price)*100 )}%
                    </td>
                    <td>
                        Rp. {val.product_info.sale_price}
                    </td>
                    <td>
                        <Button variant="outline-danger" onClick={() => handleDelete(val.product_info._id)}>
                            Remove
                        </Button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div style={styles.container}>
            <div style={styles.title}>
                Kelas yang Anda Ikuti
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Sale Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCart()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

const styles = {
    container: {
        margin: '0rem 3rem',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '1rem 0rem 0.75rem 0rem',
    },
};

export default ShoppingCart;
