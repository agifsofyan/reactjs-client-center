import React from 'react';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 15,
        width: '90%',
        backgroundColor: "#E8E8E8",
        borderRadius: 50,
        margin: '10px 0px',
        marginLeft: '35px',
    };

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
    };

    const labelStyles = {
        margin: '7px 0px 7px 15px',
        color: 'black',
        fontFamily: 'Rubik, sans-serif',
        marginRight: '35px',
    };

    return (
        <div style={{display:'flex'}}>
            <div style={containerStyles}>
                <div style={fillerStyles} />
            </div>
            <div style={labelStyles}>
                {`${completed}%`}
            </div>
        </div>
    );
};

export default ProgressBar;
