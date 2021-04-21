import React from "react"

// MODULE
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

import Swal from "sweetalert2";
import { logOut } from "../../../Redux/Actions/userAction";

// STYLING DI ../drawer.css

function Home (props) {

    // HISTORY
    const history2 = useHistory()

    const { handleModalClose , history , location , user } = props

    let handleChangePage = (route,e) => {
        e.preventDefault()
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
            title: "Are you sure?",
            text: "You are going to log out from this account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out"
        }).then((result) => {
            if (result.isConfirmed) {
                handleModalClose()
                console.log("SUCCESS LOGOUT")
                dispatch(logOut());
                history2.push("/")
                Swal.fire(
                    "Success!",
                    "You have been logged out.",
                    "success",
                );
            }
        })
    };

    let nameFormat = (str) => {
        let strArr = str.split(" ")
        if (strArr.length === 1) {
            let result = str.split("")
            result[0] = result[0].toUpperCase()
            console.log(result , " <<<< HAHAHDSFJNDSFNDSJFNSJDFN")
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
                    display:"flex",
                    justifyContent:"center",
                }}
                className="bmc-content-4"
            >
                Hi, {user && nameFormat(user.name)}
            </div>

            <div style={{
                backgroundColor:"#E9E9E9",
                width:"90%",
                height:"7px",
            }} />

            <div className="bmc-content-4">
                Aktivitas Kamu
            </div>

            <a
                href="/" 
                target="_blank"
                // style={{marginTop : 19}}
                className={checkSelected("/lms-dashboard")}
                onClick={e=>handleChangePage('/lms-dashboard',e)}
            >
                Lihat Kelas
            </a>

            <a
                href="/" 
                target="_blank"
                className="bmc-content-4"
                className={checkSelected("/order-history")}
                onClick={e=>handleChangePage('/order-history',e)}
            >
                Riwayat Pemesanan
            </a>

            <div className="bmc-content-4">
                Peringkat
            </div>

            <div className="bmc-content-4">
                Terima Tantangan?
            </div>

            <div style={{
                backgroundColor:"#E9E9E9",
                width:"90%",
                height:"7px",
            }} />

            <div className="bmc-content-4">
                Profile Saya
            </div>

            <div className="bmc-content-4">
                Topik Favorit Saya
            </div>

            <div className="bmc-content-4" onClick={handleLogOut}>
                Keluar Akun
            </div>
        </div>
    );
};

export default Home;
