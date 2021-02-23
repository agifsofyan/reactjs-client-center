import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserWhoAmI } from '../../../Redux/Actions/userAction';

// STYLING DI ../drawer.css

function Home (props) {

    const { handleModalClose , history , location } = props

    let handleChangePage = (route) => {
        history.push(route)
        handleModalClose()
    };

    let checkSelected = (current) => {
        if (location.pathname === current) {
            return "bmc-content-4-selected"
        } else {
            return "bmc-content-4"
        }
    };

    const dispatch = useDispatch();

    const userInfo = useSelector(({ user }) => user.userMe);

    useEffect(() => {
        dispatch(getUserWhoAmI());
    }, [dispatch]);

    return (
        <div className="bmc-drawer-9">
            <div 
                style={{
                    marginTop:19,
                    display:'flex',
                    justifyContent:'center',
                }}
                className='bmc-content-4'
            >
                Hi, John Doe
            </div>

            <div style={{
                backgroundColor:'#E9E9E9',
                width:'90%',
                height:'7px',
            }} />

            <div className='bmc-content-4'>
                Aktivitas Kamu
            </div>

            <div className='bmc-content-4'>
                Riwayat Pemesanan
            </div>

            <div className='bmc-content-4'>
                Peringkat
            </div>

            <div className='bmc-content-4'>
                Terima Tantangan?
            </div>

            <div style={{
                backgroundColor:'#E9E9E9',
                width:'90%',
                height:'7px',
            }} />

            <div className='bmc-content-4'>
                Profile Saya
            </div>

            <div className='bmc-content-4'>
                Topik Favorit Saya
            </div>

            <div className='bmc-content-4'>
                Keluar Akun
            </div>
        </div>
    );
};

export default Home;
