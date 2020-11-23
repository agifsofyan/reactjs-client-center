import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import starFilled from '../../Assets/Images/star-filled.png';
import starOutlined from '../../Assets/Images/star-outline.png';

const Ratings = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                Member Rating
            </div>
            <div style={styles.wrapper}>
                {/* LEFT start */}
                <span style={styles.leftWrapper}>
                    <span style={styles.numeralRate}>
                        5.0
                    </span>
                    <span style={styles.ratingName}>
                        Course Rating
                    </span>
                </span>
                {/* LEFT end */}
                {/* RIGHT start */}
                <div style={styles.ratesWrapper}>
                    <span style={styles.first}>
                        <ProgressBar now={53} style={styles.bar} />
                        <span style={styles.starRating}>
                            <span>
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                            </span>
                            <span style={styles.percent}>
                                53%
                            </span>
                        </span>
                    </span>
                    <span style={styles.first}>
                        <ProgressBar now={32} style={styles.bar} />
                        <span style={styles.starRating}>
                            <span>
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                            </span>
                            <span style={styles.percent}>
                                32%
                            </span>
                        </span>
                    </span>
                    <span style={styles.first}>
                        <ProgressBar now={22} style={styles.bar} />
                        <span style={styles.starRating}>
                            <span>
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                            </span>
                            <span style={styles.percent}>
                                22%
                            </span>
                        </span>
                    </span>
                    <span style={styles.first}>
                        <ProgressBar now={14} style={styles.bar} />
                        <span style={styles.starRating}>
                            <span>
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                            </span>
                            <span style={styles.percent}>
                                14%
                            </span>
                        </span>
                    </span>
                    <span style={styles.first}>
                        <ProgressBar now={10} style={styles.bar} />
                        <span style={styles.starRating}>
                            <span>
                                <img src={starFilled} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                                <img src={starOutlined} alt='starFilled' height={15} />
                            </span>
                            <span style={styles.percent}>
                                10%
                            </span>
                        </span>
                    </span>
                </div>
                {/* RIGHT end */}
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginBottom: '1rem',
    },
    title: {
        display: 'flex',
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '1rem 1rem 0rem 10rem',
    },
    wrapper: {
        display: 'flex',
    },
    leftWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    numeralRate: {
        color: '#BE5A0E',
        fontSize: '5rem',
        fontWeight: '600',
        marginLeft: '10rem',
        width: '7rem',
        height: '7rem',
    },
    ratingName: {
        color: '#BE5A0E',
        fontSize: '1.1em',
        fontWeight: '600',
        marginLeft: '10rem',
        marginTop: '-0.5rem',
        width: '7.5rem',
    },
    ratesWrapper: {
        marginLeft: '4rem',
    },
    first: {
        display: 'flex',
        justifyContent: 'center',
    },
    bar: {
        marginTop: '0.65rem',
        width: '30rem',
        height: '0.75rem',
    },
    starRating: {
        display: 'flex',
        marginLeft: '1rem',
    },
    percent: {
        color: '#0F7C90',
        marginLeft: '0.5rem',
    },
};

export default Ratings;
