import React, { useState } from 'react';
import { Radio, Tab } from 'semantic-ui-react';
// EWALLET
import dana from '../../Assets/Images/dana.png';
import linkaja from '../../Assets/Images/linkaja.png';
import ovo from '../../Assets/Images/ovo.png';
// VIRTUAL ACCOUNT
import bca from '../../Assets/Images/bca.png';
import bni from '../../Assets/Images/bni.png';
import mandiri from '../../Assets/Images/mandiri.png';
import sampoerna from '../../Assets/Images/sampoerna.png';
// CREDIT CARD
import visa from '../../Assets/Images/visa.png';
import mastercard from '../../Assets/Images/mastercard.png';
import jcb from '../../Assets/Images/jcb.png';

const EWallet = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({
            value,
        });
    };

    return (
        <div>
            <div style={styles.methodTitle}>
                E-Wallet
            </div>
            <div>
                Bayar langsung dari akun ewallet
            </div>
            <div style={styles.selected}>
                Selected Method: <b>{state.value}</b>
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='Dana'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'Dana'}
                />
                <img src={dana} alt='icon dana' height={27.5} />
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='LinkAja'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'LinkAja'}
                />
                <img src={linkaja} alt='icon linkaja' height={27.5} />
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='OVO'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'OVO'}
                />
                <img src={ovo} alt='icon ovo' height={27.5} />
            </div>
        </div>
    );
};

const VirtualAccount = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({ value });
    };

    return (
        <div>
            <div style={styles.methodTitle}>
                Virtual Account
            </div>
            <div>
                Bayar dengan kode dari bank
            </div>
            <div style={styles.selected}>
                Selected Method: <b>{state.value}</b>
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='BCA'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'BCA'}
                />
                <img src={bca} alt='icon dana' height={27.5} />
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='BNI'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'BNI'}
                />
                <img src={bni} alt='icon linkaja' height={27.5} />
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='Mandiri'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'Mandiri'}
                />
                <img src={mandiri} alt='icon ovo' height={27.5} />
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='Sampoerna'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'Sampoerna'}
                />
                <img src={sampoerna} alt='icon ovo' height={27.5} />
            </div>
        </div>
    );
};

const CreditCard = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({ value });
    };

    return (
        <div>
            <div style={styles.methodTitle}>
                Credit Card
            </div>
            <div>
                Bayar menggunakan kartu kredit
            </div>
            <div style={styles.selected}>
                Selected Method: <b>{state.value}</b>
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='Visa'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'Visa'}
                />
                <img src={visa} alt='icon dana' height={27.5} />
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='Mastercard'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'Mastercard'}
                />
                <img src={mastercard} alt='icon linkaja' height={27.5} />
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='JCB'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'JCB'}
                />
                <img src={jcb} alt='icon ovo' height={27.5} />
            </div>
        </div>
    );
};

const BankTransfer = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({ value });
    };

    return (
        <div>
            <div style={styles.methodTitle}>
                Bank Transfer
            </div>
            <div>
                Bayar dengan akhir nominal 4 angka verifikasi
            </div>
            <div style={styles.selected}>
                Selected Method: <b>{state.value}</b>
            </div>
            <div style={styles.radioDiv}>
                <Radio 
                    value='BCA Transfer'
                    onChange={handleChange}
                    style={styles.radioBtn}
                    checked={state.value === 'BCA Transfer'}
                />
                <img src={bca} alt='icon dana' height={27.5} />
            </div>
        </div>
    );
};

const panes = [
    {
        menuItem: 'E-Wallet', 
        render: () => (
            <Tab.Pane style={styles.panesContainer}>
                <EWallet />
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Virtual Account', 
        render: () => (
            <Tab.Pane style={styles.panesContainer}>
                <VirtualAccount />
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Credit Card', 
        render: () => (
            <Tab.Pane style={styles.panesContainer}>
                <CreditCard />
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Bank Transfer', 
        render: () => (
            <Tab.Pane style={styles.panesContainer}>
                <BankTransfer />
            </Tab.Pane>
        ),
    },
];

const Methods = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({ value });
    };

    return (
        <div style={styles.root}>
            <div style={styles.title}>
                Payment Methods
            </div>
            <Tab 
                panes={panes}
                menu={{ fluid: true, vertical: true, tabular: true }}
            />
            <div style={styles.payButton}>
                BAYAR SEKARANG
            </div>
        </div>
    );
};

const styles = {
    root: {
        margin: '3rem 17.5rem',
    },
    title: {
        margin: '1.5rem 0rem',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontWeight: '600',
    },
    payButton: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        margin: '2.5rem 15rem',
        paddingTop: '1rem',
        backgroundColor: '#FF4500',
        borderRadius: '1rem',
        color: 'white',
        height: '3.5rem',
        fontSize: '2rem',
        fontWeight: '600',
        boxShadow: '0 0 0.5rem #FF4500',
    },
    panesContainer: {
        borderRadius: '0.5rem',
    },
    methodTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '0.15rem',
    },
    selected: {
        fontSize: '0.9rem',
        color: '#696969',
        marginTop: '0.25rem',
    },
    radioDiv: {
        border: '0.05rem solid #d4d4d4',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        margin: '1rem 0rem',
    },
    radioBtn: {
        margin: '0rem 0.75rem',
        paddingTop: '0.15rem',
    },
};

export default Methods;
