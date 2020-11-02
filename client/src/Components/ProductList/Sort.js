import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import downArrow from '../../Assets/down-arrow.png';

const Sort = () => {
    const [dropdownTopic, setDropdownTopic] = useState(false);
    const [dropdownTime, setDropdownTime] = useState(false);

    const toggleTopic = () => {
        setDropdownTopic(prevState => !prevState);
    };

    const toggleTime = () => {
        setDropdownTime(prevState => !prevState);
    };

    return (
        <div style={styles.container}>
            {/* TOPIC SORT */}
            <div style={{display:'flex', margin:'0.7em 2em'}}>
                <Dropdown isOpen={dropdownTopic} toggle={toggleTopic}>
                    <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownTopic}
                    style={styles.dropTopic}>
                        Sort by topic
                        <img src={downArrow} alt='arrow' height={12} style={{marginLeft:'0.5rem'}} />
                    </DropdownToggle>
                    <DropdownMenu>
                        <div onClick={toggleTopic} style={styles.list}>Business</div>
                        <div onClick={toggleTopic} style={styles.list}>Career</div>
                        <div onClick={toggleTopic} style={styles.list}>Finance</div>
                        <div onClick={toggleTopic} style={styles.list}>Marketing</div>
                        <div onClick={toggleTopic} style={styles.list}>Sales</div>
                    </DropdownMenu>
                </Dropdown>
            </div>
            {/* NEWEST SORT */}
            <div style={{display:'flex', margin:'0.7em 0em'}}>
                <Dropdown isOpen={dropdownTime}Topic toggle={toggleTime}>
                    <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownTime}
                    style={styles.dropTime}>
                        Sort by time
                        <img src={downArrow} alt='arrow' height={12} style={{marginLeft:'0.5rem'}} />
                    </DropdownToggle>
                    <DropdownMenu>
                        <div onClick={toggleTime} style={styles.list}>Newest</div>
                        <div onClick={toggleTime} style={styles.list}>Oldest</div>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '7vh',
        boxShadow: '0 0 0.25rem #a4a4a4',
    },
    topicSort: {
        position: 'absolute',
        left: '1rem',
        top: '3rem',
    },
    newSort: {
        position: 'absolute',
        left: '10rem',
        top: '3rem',
    },
    dropTopic: {
        cursor: 'pointer',
        fontSize: '0.8em',
    },
    dropTime: {
        cursor: 'pointer',
        fontSize: '0.8em',
    },
    list: {
        cursor: 'pointer',
        margin: '0.2rem 1rem',
    },
};

export default Sort;
