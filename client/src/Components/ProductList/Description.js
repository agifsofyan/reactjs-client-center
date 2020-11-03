import React from 'react';
import businessIcon from '../../Assets/business-icon.png';

const Description = () => {
    return (
        <div style={styles.container}>
            <img src={businessIcon} alt='business-icon' style={styles.icon} />
            <div style={styles.description}>
                <div style={styles.title}>
                    Business
                </div>
                <div style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet ipsum ipsum. Aliquam maximus elit quis lacus interdum sagittis. Suspendisse lobortis, ex eget volutpat aliquet, libero leo luctus odio, sed venenatis mi tortor nec metus. Suspendisse vitae quam pellentesque, condimentum nulla non, luctus leo.
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '15vh',
        display: 'flex',
        paddingTop: '0.5em',
    },
    icon: {
        height: 100,
        margin: '0em 1em 0em 3em',
    },
    description: {
        flexDirection: 'column',
        maxWidth: '75vw',
        margin: 'auto 0em',
    },
    title: {
        fontSize: '1.1em',
        fontWeight: '600',
    },
    subtitle: {
        fontSize: '0.85em',
    },
};

export default Description;
