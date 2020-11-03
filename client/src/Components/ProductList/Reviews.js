import React from 'react';
import profile from '../../Assets/profile.png';
import starFilled from '../../Assets/star-filled.png';

const Reviews = () => {
    const XLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 0.75,
                width: '80%',
            }}
        />
    );

    return (
        <div style={styles.container}>
             <div style={styles.header}>
                Reviews
            </div>
            {/* ------------------------------------------------------------------------------------ */}
            <div style={styles.xLine}>
                <XLine color="#a4a4a4" />
            </div>
            {/* ------------------------------------------------------------------------------------ */}
            <div style={styles.commentWrapper}>
                <div style={styles.profile}>
                    <img src={profile} alt='profile' height={60} />
                    <div style={styles.nameTime}>
                        <div style={styles.name}>Anthony Goh</div>
                        <div style={styles.time}>about a week ago</div>
                    </div>
                </div>
                <div style={styles.stars}>
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0em'}} />
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0em 0em 0.1em'}} />
                </div>
                <div style={styles.comment}>
                    Enjoyed the course as it gives a broad overview of the business world in very layman terms. NOTE! This is not the course if you're looking for in-depth knowledge.
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        borderRadius: '1.5em',
        margin: '1em 0em 3em 3em',
        width: '35vw',
        height: '17.5em',
        boxShadow: '0 0 5px #a4a4a4',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.25em',
        paddingTop: '0.5em',
    },
    xLine: {
        marginTop: '-0.5em',
    },
    commentWrapper: {
        width: '23em',
        position: 'absolute',
        left: '6em',
        marginTop: '0.7em',
    },
    profile: {
        display: 'flex',
    },
    nameTime: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5em 1em',
    },
    name: {
        fontSize: '1.1em',
        fontWeight: '600',
    },
    time: {
        fontSize: '0.8em',
        color: '#a4a4a4',
    },
    stars: {
        margin: '0.3em 0em',
    },
    comment: {
        fontSize: '0.9em',
        margin: '0.5em 0em',
    },
};

export default Reviews;
