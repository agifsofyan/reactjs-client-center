import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, Tab } from 'semantic-ui-react';
import { getPayMethod } from '../Redux/Actions/PaymentAction';

const EWallet = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({
            value,
        });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPayMethod());
    }, [dispatch]);

    const method = useSelector(({ payment }) => payment.methodList);

    const renderMethod = () => {
        return method.filter(item => item.info === 'EWallet').map((val,index) => {
            return (
                <div key={index}>
                    <div style={styles.radioDiv}>
                        <Radio 
                            label={val.isActive ? null : 'Not Available'}
                            value={val.name}
                            onChange={handleChange}
                            style={styles.radioBtn}
                            checked={state.value === val.name}
                            disabled={!val.isActive}
                        />
                        <img src={val.icon} alt='icon' height={27.5} />
                    </div>
                </div>
            );
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
            {renderMethod()}
        </div>
    );
};

const VirtualAccount = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({ value });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPayMethod());
    }, [dispatch]);

    const method = useSelector(({ payment }) => payment.methodList);

    const renderMethod = () => {
        return method.filter(item => item.info === 'Virtual-Account').map((val,index) => {
            return (
                <div key={index}>
                    <div style={styles.radioDiv}>
                        <Radio 
                            label={val.isActive ? null : 'Not Available'}
                            value={val.name}
                            onChange={handleChange}
                            style={styles.radioBtn}
                            checked={state.value === val.name}
                            disabled={!val.isActive}
                        />
                        <img src={val.icon} alt='icon' height={27.5} />
                    </div>
                </div>
            );
        });
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
            {renderMethod()}
        </div>
    );
};

const CreditCard = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({ value });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPayMethod());
    }, [dispatch]);

    const method = useSelector(({ payment }) => payment.methodList);

    const renderMethod = () => {
        return method.filter(item => item.info === 'Credit-Card').map((val,index) => {
            return (
                <div key={index}>
                    <div style={styles.radioDiv}>
                        <Radio 
                            label={val.isActive ? null : 'Not Available'}
                            value={val.name}
                            onChange={handleChange}
                            style={styles.radioBtn}
                            checked={state.value === val.name}
                            disabled={!val.isActive}
                        />
                        <img src={val.icon} alt='icon' height={27.5} />
                    </div>
                </div>
            );
        });
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
            {renderMethod()}
        </div>
    );
};

const BankTransfer = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({ value });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPayMethod());
    }, [dispatch]);

    const method = useSelector(({ payment }) => payment.methodList);

    const renderMethod = () => {
        return method.filter(item => item.info === 'Bank-Transfer').map((val,index) => {
            return (
                <div key={index}>
                    <div style={styles.radioDiv}>
                        <Radio 
                            label={val.isActive ? null : 'Not Available'}
                            value={val.name}
                            onChange={handleChange}
                            style={styles.radioBtn}
                            checked={state.value === val.name}
                            disabled={!val.isActive}
                        />
                        <img src={val.icon} alt='icon' height={27.5} />
                    </div>
                </div>
            );
        });
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
            {renderMethod()}
        </div>
    );
};

const paneContents = [
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
    useEffect(() => {
        document.title = "Rendering ONLY";
    });

    const [state, setState] = useState('');

    const handleChange = (e, { value }) => {
        setState({
            value,
        });
    };

    return (
        <div style={styles.root}>
            <div style={styles.title}>
                Payment Methods
            </div>
            <div style={styles.selectedTop}>
                Selected Payment Method: 
            </div>
            <Tab 
                panes={paneContents}
                menu={{ fluid: true, vertical: true, tabular: true }}
                handChange={handleChange}
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
    selectedTop: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
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
