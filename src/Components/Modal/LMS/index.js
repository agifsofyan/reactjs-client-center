import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { logOut } from '../../../Redux/Actions/userAction';

// STYLING DI ../drawer.css

function Home (props) {

    const { handleModalClose , history , location , user } = props

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

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are going to log out from this account.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log Out'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logOut());
                Swal.fire(
                    'Success!',
                    'You have been logged out.',
                    'success',
                );
            }
        })
    };

    let nameFormat = (str) => {
        let strArr = str.split(' ')
        if (strArr.length === 1) {
            let result = str.split("")
            result[0] = result[0].toUpperCase()
            console.log(result , ' <<<< HAHAHDSFJNDSFNDSJFNSJDFN')
            return result.join("")
        }else {
            return str
        }
    }

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
                Hi, {user && nameFormat(user.name)}
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

            <div className='bmc-content-4' onClick={handleLogOut}>
                Keluar Akun
            </div>
        </div>
    );
};

export default Home;
