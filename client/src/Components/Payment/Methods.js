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

    const handleChange = (e, { value }) => setState({ value });

    return (
        <div>
            <div style={{fontSize:'1.1rem', fontWeight:'600', marginBottom:'0.15rem'}}>
                E-Wallet
            </div>
            <div>Bayar langsung dari akun ewallet</div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='dana'
                    onChange={handleChange}
                    checked={state.value === 'dana'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={dana} alt='icon dana' height={27.5} />
            </div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='linkaja'
                    onChange={handleChange}
                    checked={state.value === 'linkaja'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={linkaja} alt='icon linkaja' height={27.5} />
            </div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='ovo'
                    onChange={handleChange}
                    checked={state.value === 'ovo'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={ovo} alt='icon ovo' height={27.5} />
            </div>
        </div>
    );
};

const VirtualAccount = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => setState({ value });

    return (
        <div>
            <div style={{fontSize:'1.1rem', fontWeight:'600', marginBottom:'0.15rem'}}>
                Virtual Account
            </div>
            <div>Bayar dengan kode dari bank</div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='bca'
                    onChange={handleChange}
                    checked={state.value === 'bca'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={bca} alt='icon dana' height={27.5} />
            </div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='bni'
                    onChange={handleChange}
                    checked={state.value === 'bni'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={bni} alt='icon linkaja' height={27.5} />
            </div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='mandiri'
                    onChange={handleChange}
                    checked={state.value === 'mandiri'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={mandiri} alt='icon ovo' height={27.5} />
            </div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='sampoerna'
                    onChange={handleChange}
                    checked={state.value === 'sampoerna'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={sampoerna} alt='icon ovo' height={27.5} />
            </div>
        </div>
    );
};

const CreditCard = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => setState({ value });

    return (
        <div>
            <div style={{fontSize:'1.1rem', fontWeight:'600', marginBottom:'0.15rem'}}>
                Credit Card
            </div>
            <div>Bayar menggunakan kartu kredit</div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='visa'
                    onChange={handleChange}
                    checked={state.value === 'visa'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={visa} alt='icon dana' height={27.5} />
            </div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='mastercard'
                    onChange={handleChange}
                    checked={state.value === 'mastercard'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={mastercard} alt='icon linkaja' height={27.5} />
            </div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='jcb'
                    onChange={handleChange}
                    checked={state.value === 'jcb'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
                />
                <img src={jcb} alt='icon ovo' height={27.5} />
            </div>
        </div>
    );
};

const BankTransfer = () => {
    const [state, setState] = useState('');

    const handleChange = (e, { value }) => setState({ value });

    return (
        <div>
            <div style={{fontSize:'1.1rem', fontWeight:'600', marginBottom:'0.15rem'}}>
                Bank Transfer
            </div>
            <div>Bayar dengan akhir nominal 4 angka verifikasi</div>
            <div style={{border:'0.05rem solid #d4d4d4', borderRadius:'0.5rem', padding:'0.5rem', margin:'1rem 0rem'}}>
                <Radio 
                    value='bca'
                    onChange={handleChange}
                    checked={state.value === 'bca'}
                    style={{margin:'0rem 0.75rem', paddingTop:'0.15rem'}} 
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
    return (
        <div style={{margin:'3rem 17.5rem'}}>
            <div style={{margin:'1.5rem 0rem', display:'flex', justifyContent:'center', fontSize:'1.25rem', fontWeight:'600'}}>
                Payment Methods
            </div>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            <div style={styles.payButton}>
                BAYAR SEKARANG
            </div>
        </div>
    );
};

const styles = {
    panesContainer: {
        borderRadius: '0.5rem',
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
};

export default Methods;
