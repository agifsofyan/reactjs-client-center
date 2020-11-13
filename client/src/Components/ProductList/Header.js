import React, { useEffect, useState } from 'react';
import larunoLogo from '../../Assets/laruno.png';
import downArrow from '../../Assets/down-arrow-thick.png';
import shoppingCart from '../../Assets/shopping-cart-black.png';
import bell from '../../Assets/bell.png';
import { Dropdown, DropdownMenu, DropdownToggle, NavLink } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin } from '../../Redux/Actions/UserAction';

const Header = () => {
    const dispatch = useDispatch();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const loggedIn = useSelector((state) => state.user.loggedIn);
    const userData = useSelector((state) => state.user.userData);
    console.log(loggedIn);

    const toggle = () => {
        setDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    return (
        <div style={styles.container}>
            <div style={styles.logo}>
                <a href='/'>
                    <img src={larunoLogo} alt='logo' style={styles.logoLaruno} />
                </a>
            </div>
            <div style={styles.topic}>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                    style={styles.dropdown}>
                        Topics
                        <img src={downArrow} alt='arrow' height={15} style={{marginLeft:'0.5rem'}} />
                    </DropdownToggle>
                    <DropdownMenu>
                        <div onClick={toggle} style={styles.list}>Business</div>
                        <div onClick={toggle} style={styles.list}>Career</div>
                        <div onClick={toggle} style={styles.list}>Finance</div>
                        <div onClick={toggle} style={styles.list}>Marketing</div>
                        <div onClick={toggle} style={styles.list}>Sales</div>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div style={styles.searchBar}>
                <TextField
                    label="Search here"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    leftIcon={<SearchIcon color="#000" />}
                    style={styles.searchField}
                />
            </div>
            <a href='/cart'>
                <div style={styles.cart}>
                    <img src={shoppingCart} alt='cart' height={20} />
                </div>
            </a>
            <div style={styles.bell}>
                <img src={bell} alt='bell' height={20} />
            </div>
            {
                loggedIn
                ?
                <div style={styles.greet}>
                    Hi, {userData.name}
                </div>
                :
                <NavLink href='/auth'>
                    <div style={styles.authBtn}>
                        Register / Login
                    </div>
                </NavLink>
            }
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f3f3f3',
        height: '10vh',
        display: 'flex',
        position: 'relative',
    },
    logo: {
        margin: '1.2em 2em',
    },
    logoLaruno: {
        height: '2vw',
    },
    topic: {
        display: 'flex',
        margin: '1.2em 3em',
    },
    dropdown: {
        cursor: 'pointer',
        color: '#033e66',
        fontWeight: '600',
    },
    list: {
        cursor: 'pointer',
        margin: '0.2rem 1rem',
        color: '#033e66',
    },
    searchBar: {
        margin: '0.8em 3em',
    },
    searchField: {
        backgroundColor: 'white',
        width: '30rem',
    },
    cart: {
        cursor: 'pointer',
        height: '2.2em',
        width: '2.2em',
        paddingTop: '0.2em',
        paddingLeft: '0.45em',
        margin: '1em 1em',
        borderRadius: '25%',
        backgroundColor: '#fff',
        boxShadow: '0 0 0.25rem #a4a4a4',
    },
    bell: {
        cursor: 'pointer',
        height: '2.2em',
        width: '2.2em',
        paddingTop: '0.2em',
        paddingLeft: '0.45em',
        margin: '1em 0em',
        borderRadius: '25%',
        backgroundColor: '#fff',
        boxShadow: '0 0 0.25rem #a4a4a4',
    },
    authBtn: {
        textDecoration: 'none',
        color: '#ff4500',
        fontWeight: '700',
        margin: '0.4rem 2rem',
        padding: '0.2rem 0.5rem',
        border: '3px solid #ff4500',
        borderRadius: '10px',
    },
    greet: {
        textDecoration: 'none',
        color: '#ff4500',
        fontWeight: '700',
        margin: '1rem 2rem',
        padding: '0.2rem 0.5rem',
    },
};

export default Header;
