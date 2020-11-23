import React from 'react';
import profile from '../../Assets/Images/profile.png';
import starFilled from '../../Assets/Images/star-filled.png';

const Reviews = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                Member Reviews
            </div>
            <div style={styles.wrapper}>
                {/* COMMENT start */}
                <div style={styles.sectionWrapper}>
                    <div style={styles.profileWrapper}>
                        <img src={profile} alt='profile' style={styles.profile} />
                        <div style={styles.nameTime}>
                            <span style={styles.name}>
                                Anthony Goh
                            </span>
                            <span style={styles.time}>
                                about a week ago
                            </span>
                        </div>
                    </div>
                    <div style={styles.commentWrapper}>
                        <div style={styles.starRating}>
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                        </div>
                        <div>
                            Enjoyed the course as it gives a broad overview of the business world in very layman terms. NOTE! This is not the course if you're looking for in-depth knowledge.
                        </div>
                    </div>
                </div>
                {/* COMMENT end */}
                {/* COMMENT start */}
                <div style={styles.sectionWrapper}>
                    <div style={styles.profileWrapper}>
                        <img src={profile} alt='profile' style={styles.profile} />
                        <div style={styles.nameTime}>
                            <span style={styles.name}>
                                Anthony Goh
                            </span>
                            <span style={styles.time}>
                                about a week ago
                            </span>
                        </div>
                    </div>
                    <div style={styles.commentWrapper}>
                        <div style={styles.starRating}>
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                        </div>
                        <div>
                            Enjoyed the course as it gives a broad overview of the business world in very layman terms. NOTE! This is not the course if you're looking for in-depth knowledge.
                        </div>
                    </div>
                </div>
                {/* COMMENT end */}
                {/* COMMENT start */}
                <div style={styles.sectionWrapper}>
                    <div style={styles.profileWrapper}>
                        <img src={profile} alt='profile' style={styles.profile} />
                        <div style={styles.nameTime}>
                            <span style={styles.name}>
                                Anthony Goh
                            </span>
                            <span style={styles.time}>
                                about a week ago
                            </span>
                        </div>
                    </div>
                    <div style={styles.commentWrapper}>
                        <div style={styles.starRating}>
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                        </div>
                        <div>
                            Enjoyed the course as it gives a broad overview of the business world in very layman terms. NOTE! This is not the course if you're looking for in-depth knowledge.
                        </div>
                    </div>
                </div>
                {/* COMMENT end */}
                {/* COMMENT start */}
                <div style={styles.sectionWrapper}>
                    <div style={styles.profileWrapper}>
                        <img src={profile} alt='profile' style={styles.profile} />
                        <div style={styles.nameTime}>
                            <span style={styles.name}>
                                Anthony Goh
                            </span>
                            <span style={styles.time}>
                                about a week ago
                            </span>
                        </div>
                    </div>
                    <div style={styles.commentWrapper}>
                        <div style={styles.starRating}>
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                        </div>
                        <div>
                            Enjoyed the course as it gives a broad overview of the business world in very layman terms. NOTE! This is not the course if you're looking for in-depth knowledge.
                        </div>
                    </div>
                </div>
                {/* COMMENT end */}
                {/* COMMENT start */}
                <div style={styles.sectionWrapper}>
                    <div style={styles.profileWrapper}>
                        <img src={profile} alt='profile' style={styles.profile} />
                        <div style={styles.nameTime}>
                            <span style={styles.name}>
                                Anthony Goh
                            </span>
                            <span style={styles.time}>
                                about a week ago
                            </span>
                        </div>
                    </div>
                    <div style={styles.commentWrapper}>
                        <div style={styles.starRating}>
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                            <img src={starFilled} alt='starFilled' height={15} />
                        </div>
                        <div>
                            Enjoyed the course as it gives a broad overview of the business world in very layman terms. NOTE! This is not the course if you're looking for in-depth knowledge.
                        </div>
                    </div>
                </div>
                {/* COMMENT end */}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0rem 10rem',
    },
    title: {
        display: 'flex',
        fontSize: '1.25rem',
        fontWeight: '600',
        padding: '1rem 0rem 1rem 0rem',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    sectionWrapper: {
        display: 'flex',
        margin: '1rem 0rem',
    },
    profileWrapper: {
        display: 'flex',
    },
    profile: {
        height: '4rem',
    },
    nameTime: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5rem',
        marginLeft: '1rem'
    },
    name: {
        fontSize: '1.25rem',
    },
    time: {
        color: '#a4a4a4',
        fontSize: '0.8rem',
        marginTop: '-0.25rem',
    },
    commentWrapper: {
        width: '50rem',
        margin: '0rem 3rem',
    },
};

export default Reviews;
