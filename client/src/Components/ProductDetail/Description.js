import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector } from 'react-redux';

const Description = (props) => {
    const loading = useSelector((state) => state.product.loading);

    return (
        <div style={styles.container}>
            {/* IMAGE start */}
            {
                loading
                ?
                <div style={styles.videoDiv}>
                    <Skeleton variant="rect" style={{width:'24rem', height:'13.5rem'}} />
                </div>
                :
                <div style={styles.videoDiv}>
                    <img src={props.image} alt='imgDesc' style={styles.image} />
                </div>
            }
            {/* IMAGE end */}
            {/* DESCRIPTION start */}
            <div style={styles.wrapper}>
                <div style={styles.title}>
                    Description
                </div>
                <div style={styles.subtitle}>
                    #1 MOST PURCHASED BUSINESS COURSE ON LARUNO!<br/>
                    ** OVER 350,000 STUDENTS IN 195 COUNTRIES
                </div>
                <div style={styles.detail}>
                    The contents of this course are all based on my work experience at several firms, including Goldman Sachs, the consulting industry at Accenture, a few companies I have started, the hedge fund industry where I worked at Citadel and also in the venture capital sector (the firm I founded had a venture capital investment in Facebook).I included helpful practical business concepts I learned while I did an MBA at Columbia University and a Bachelor of Commerce degree at McGill University. Think of this course as a “greatest hits” business summaries from my MBA, undergraduate business degree, work experience in consulting, equities, hedge funds, venture capital and starting my own companies.
                </div>
            </div>
            {/* DESCRIPTION end */}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
    },
    videoDiv: {
        padding: '2rem 3rem',
    },
    image: {
        width: '24rem',
        height: '13.5rem',
        borderRadius: '0.75rem',
        border: '0.15rem solid #a4a4a4',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '45rem',
        margin: 'auto 0rem',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: '600',
    },
    subtitle: {
        fontSize: '1rem',
        fontWeight: '500',
        margin: '0.65rem 0rem',
    },
    detail: {
        fontSize: '0.9rem',
    },
};

export default Description;
