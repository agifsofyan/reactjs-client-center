import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
    const cartList = useSelector((state) => state.cart.cartList);

    let totalCourse = cartList.length;
    let price = 0;
    let salePrice = 0;

    cartList.map((val,index) => {
        return(
            <div>
                <div>{price += val.product_info.price}</div>
                <div>{salePrice += val.product_info.sale_price}</div>
            </div>
        );
    });

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.names}>
                    <div style={styles.namesTxt}>
                        Course Taken
                    </div>
                    <div style={styles.namesTxt}>
                        Total Price
                    </div>
                    <div style={styles.namesTxt}>
                        Total Sale Price
                    </div>
                    <div style={styles.namesTxt}>
                        You Saved
                    </div>
                </div>
                <div style={styles.values}>
                    <div style={styles.valuesTxt}>
                        {totalCourse}
                    </div>
                    <div style={styles.valuesTxt}>
                        Rp. {price.toLocaleString('id-ID')}
                    </div>
                    <div style={styles.valuesTxt}>
                        Rp. {salePrice.toLocaleString('id-ID')}
                    </div>
                    <div style={styles.valuesTxt}>
                        Rp. {(price - salePrice).toLocaleString('id-ID')}
                    </div>
                </div>
            </div>
            <div style={styles.separator1} />
            <div style={styles.pay}>
                <div style={styles.payTxt}>
                    Amount will be paid
                </div>
                <div style={styles.payNum}>
                    Rp. {salePrice.toLocaleString('id-ID')}
                </div>
            </div>
            <div style={styles.separator1} />
            <div style={styles.choosePayBtn}>
                <div style={styles.btnTxt}>
                    PILIH METODE PEMBAYARAN
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '10rem',
        backgroundColor: '#f3f3f3',
    },
    content: {
        display: 'flex',
        margin: '0rem 3rem',
    },
    names: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1.25rem 2rem 1.75rem 1rem',
    },
    namesTxt: {
        fontSize: '1.05rem',
        margin: '0.15rem 0rem',
    },
    values: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1.25rem 1rem 1.75rem 2rem',
    },
    valuesTxt: {
        fontSize: '1.05rem',
        margin: '0.15rem 0rem',
    },
    separator1: {
        borderLeft: '0.1rem solid gray',
        margin: '1.25rem 0rem'
    },
    pay: {
        margin: '2rem 8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    payTxt: {
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '0.5rem 0.5rem 0.5rem 0.5rem',
    },
    payNum: {
        fontSize: '1.15rem',
        margin: '0.5rem 0.5rem 0.5rem 0.5rem',
    },
    choosePayBtn: {
        margin: 'auto 0rem',
    },
    btnTxt: {
        cursor: 'pointer',
        color: 'white',
        fontWeight: '600',
        fontSize: '1.5rem',
        borderRadius: '1rem',
        padding: '0.5rem 1rem',
        margin: '0rem 2.75rem',
        backgroundColor: '#ff4500',
        boxShadow: '0 0 5px #ff4500',
    },
};

export default Summary;
