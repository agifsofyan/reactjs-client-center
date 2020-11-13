import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useState } from 'react';

const OrderBump = () => {
    const [ticked, setTicked] = useState(false);

    const handleChangeTicked = (e) => {
        setTicked(
            !ticked,
            e.target.checked,
        );
    };

    const img_url = 'https://img.freepik.com/free-vector/currently-offline-twitch-banner-background-vector-template_1361-2541.jpg?size=626&ext=jpg';

    return (
        <div style={styles.container}>
            <div style={styles.separator} />
            <div style={styles.box}>
                <div style={styles.topSection}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                checked={ticked}
                                onClick={handleChangeTicked}
                            />
                        }
                        label={
                            <span style={{fontSize: '1.15rem', fontWeight:'500'}}>
                                Judul Order Bump
                            </span>
                        }
                        style={styles.tickBump}
                    />
                </div>
                <div style={styles.content}>
                    <img src={img_url} alt='gambar bump' style={styles.contentImage} />
                    <div style={styles.contentText}>
                        <div style={styles.contentTitle}>
                            Title goes here
                        </div>
                        <div style={styles.contentDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper tincidunt sodales. Vestibulum venenatis porttitor lorem, quis finibus velit viverra ac. Ut a varius nulla. Nam tempus dapibus leo non vulputate. Fusce id mi ipsum. Nam in dui laoreet, lobortis ligula at, scelerisque mi. Cras nec nunc magna. Proin blandit viverra dui. Fusce tempor dignissim lorem vel tincidunt.  
                        </div>
                    </div>
                </div>
                <div style={styles.bottomSection}>
                    <span style={styles.footerTxt}>
                        Footer starting cats are CUTE little animals
                    </span>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {},
    separator: {
        display: 'block',
        border: '.03125rem solid #dbdbdb',
        color: 'rgba(0,0,0,0.8)',
        lineHeight: '1.2',
        margin: '3rem 2.5rem 3rem 2.5rem',
        flex: 1,
    },
    box: {
        border: '0.25rem solid red',
        borderStyle: 'dashed',
        margin: '0rem 6.5rem 3rem 6.5rem',
        borderRadius: '1.5rem',
        height: '22.5rem',
    },
    topSection: {
        borderRadius: '1.3rem 1.3rem 0rem 0rem',
        borderBottom: '0.1rem solid #999999',
        backgroundColor: '#f3f3f3',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center',
    },
    tickBump: {
        marginTop: '0.25rem',
        marginLeft: '1rem',
    },
    content: {
        display: 'flex',
    },
    contentImage: {
        height: '15rem',
        width: '30rem',
    },
    contentText: {
        margin: '2rem 3rem',
    },
    contentTitle: {
        fontSize: '1.15rem',
        fontWeight: '600',
    },
    contentDescription: {
        marginTop: '0.5rem',
        fontSize: '0.9rem',
    },
    bottomSection: {
        borderRadius: '0rem 0rem 1.3rem 1.3rem',
        borderTop: '0.1rem solid #999999',
        backgroundColor: '#f3f3f3',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center',
    },
    footerTxt: {
        marginLeft: '2rem',
        fontSize: '1.1rem',
        color: '#8A8A8A',
    },
};

export default OrderBump;
