import React from 'react';
import starFilled from '../../Assets/star-filled.png';
import starOutlined from '../../Assets/star-outline.png';

const Ratings = () => {
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

    const YLine = ({ color, height }) => (
        <div 
            style={{
                borderLeft: `1px solid ${color}`,
                height: `${height}em`,
                position: 'absolute',
                left: '17.5em',
            }}
        ></div>
    );

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                Ratings
            </div>
            {/* ------------------------------------------------------------------------------------ */}
            <div style={styles.xLine}>
                <XLine color="#a4a4a4" />
            </div>
            {/* ------------------------------------------------------------------------------------ */}
            <div style={styles.leftRating}>
                <div style={styles.numeralRate}>
                    5.0
                </div>
                <div style={styles.stars1}>
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0em'}} />
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                    <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0em 0em 0.1em'}} />
                </div>
                <div style={styles.ratingName}>
                    Course Rating
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------ */}
            <YLine color='#a4a4a4' height='12' />
            {/* ------------------------------------------------------------------------------------ */}
            <div style={styles.rightRating}>
                <div style={styles.stars2}>
                    <div style={styles.starRating}>
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0em 0em 0.1em'}} />
                        <div style={styles.percent}>
                            53%
                        </div>
                    </div>
                    <div style={styles.starRating}>
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0em 0em 0.1em'}} />
                        <div style={styles.percent}>
                            32%
                        </div>
                    </div>
                    <div style={styles.starRating}>
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0em 0em 0.1em'}} />
                        <div style={styles.percent}>
                            12%
                        </div>
                    </div>
                    <div style={styles.starRating}>
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0em'}} />
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0em 0em 0.1em'}} />
                        <div style={styles.percent}>
                            2%
                        </div>
                    </div>
                    <div style={styles.starRating}>
                        <img src={starFilled} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0.1em 0em 0.1em'}} />
                        <img src={starOutlined} alt='starFilled' height={20} style={{margin:'0em 0em 0em 0.1em'}} />
                        <div style={styles.percent}>
                            1%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        borderRadius: '1.5em',
        margin: '2em 0em 1.5em 3em',
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
    leftRating: {
        position: 'absolute',
        left: '7em',
    },
    numeralRate: {
        fontSize: '5em',
        fontWeight: '600',
        color: '#BE5A0E',
        width: '25%',
        display: 'flex',
    },
    stars1: {
        marginTop: '-0.8em',
    },
    ratingName: {
        color: '#BE5A0E',
        fontSize: '1.1em',
        fontWeight: '600',
    },
    bars: {
        width: '30%',
    },
    rightRating: {
        position: 'absolute',
        left: '20em',
        marginTop: '2em',
    },
    stars2: {
        display: 'flex',
        flexDirection: 'column',
    },
    starRating: {
        display: 'flex',
    },
    percent: {
        color: '#0F7C90',
        marginLeft: '0.5em',
    },
};

export default Ratings;
