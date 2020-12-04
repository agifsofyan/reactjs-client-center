import React, { useEffect, useState } from 'react';
import larunoLogo from '../../Assets/Images/larunoCircular.png';
import downArrow from '../../Assets/Images/down-arrow-thick.png';
import menu from '../../Assets/Images/menu.png';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { keepLogin } from '../../Redux/Actions/UserAction';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InputAdornment from '@material-ui/core/InputAdornment';
import shoppingCart from '../../Assets/Images/shopping-cart-black.png';
import bell from '../../Assets/Images/bell.png';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const Header = () => {
    const dispatch = useDispatch();

    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    const toggle1 = () => {
        setDropdown1(prevState => !prevState);
    };

    const toggle2 = () => {
        setDropdown2(prevState => !prevState);
    };

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <div style={styles.container}>
                <img src={larunoLogo} alt='logo' style={styles.logo} />
                <div style={styles.searchBar}>
                    <TextField
                        size="small"
                        variant="outlined"
                        id="outlined-size-small"
                        placeholder="Search here"
                        style={styles.searchField}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
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
                <div>
                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <img 
                                src={menu} 
                                alt='menu' 
                                style={styles.menu} 
                                onClick={toggleDrawer(anchor, true)} 
                            />
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div style={styles.sortingContainer}>
                <div style={styles.topicBottom}>
                    <Dropdown isOpen={dropdown1} toggle={toggle1}>
                        <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={dropdown1}
                        style={styles.dropdown}>
                            Topics
                            <img src={downArrow} alt='arrow' height={15} style={{marginLeft:'0.5rem'}} />
                        </DropdownToggle>
                        <DropdownMenu>
                            <div style={styles.list}>Business</div>
                            <div style={styles.list}>Career</div>
                            <div style={styles.list}>Finance</div>
                            <div style={styles.list}>Marketing</div>
                            <div style={styles.list}>Sales</div>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div style={styles.topicBottom}> 
                    <Dropdown isOpen={dropdown2} toggle={toggle2}>
                        <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={dropdown2}
                        style={styles.dropdown}>
                            Newest
                            <img src={downArrow} alt='arrow' height={15} style={{marginLeft:'0.5rem'}} />
                        </DropdownToggle>
                        <DropdownMenu>
                            <div style={styles.list}>Newest</div>
                            <div style={styles.list}>Oldest</div>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </React.Fragment>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '4rem',
        backgroundColor: '#F4F4F4',
        boxShadow: '0 0.15rem 0.25rem #CCCCCC',
    },
    logo: {
        height: '2.75rem',
        margin: '0.5rem 0.7rem',
    },
    topic: {
        display: 'flex',
        margin: '1.15rem 0rem',
        width: '5rem',
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
        margin: 'auto 1rem',
    },
    searchField: {
        backgroundColor: 'white',
        width: '12.5rem',
    },
    cart: {
        cursor: 'pointer',
        height: '2.2rem',
        width: '2.2rem',
        paddingTop: '0.2rem',
        paddingLeft: '0.45rem',
        margin: '1rem 1rem 1rem 0rem',
        borderRadius: '25%',
        backgroundColor: '#fff',
        boxShadow: '0 0 0.25rem #a4a4a4',
    },
    bell: {
        cursor: 'pointer',
        height: '2.2rem',
        width: '2.2rem',
        paddingTop: '0.2rem',
        paddingLeft: '0.45rem',
        margin: '1rem 0rem',
        borderRadius: '25%',
        backgroundColor: '#fff',
        boxShadow: '0 0 0.25rem #a4a4a4',
    },
    menu: {
        height: '2rem',
        margin: '1rem 1.5rem',
    },
    sortingContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0.75rem 0rem',
        borderBottom: '0.1rem solid #A4A4A4',
        margin: '0rem 1.5rem',
    },
    topicBottom: {
        display: 'flex',
        width: '6rem',
    },
};

export default Header;
