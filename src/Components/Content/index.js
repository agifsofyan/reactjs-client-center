import React from 'react';
import { Carousel } from 'antd';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import './content.css';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
        marginBottom: '20px',
        boxShadow: '0 0 5px 1.25px #E6E6E6',
        // borderRadius: 15,
    },
}));

const Content = () => {
    const classes = useStyles();

    const topicList = [
        {
            name: "Trending",
            active: true,
        },
        {
            name: "Content",
            active: false,
        },
        {
            name: "Topic",
            active: false,
        },
    ];

    const renderButtons = () => {
        return topicList.map((val,index) => {
            return (
                <div key={index}>
                    <button 
                        className={
                            val.active 
                            ?
                            `content-btn active-btn`
                            :
                            `content-btn`
                        }
                    >
                        {val.name}
                    </button>
                </div>
            );
        });
    };

    const Iframe = (
        <iframe 
            title='business' 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/PO_d169ibZ8" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            className='content-video' 
        />
    );

    return (
        <div className='content-section'>
            <TextField
                variant="outlined"
                placeholder="Search here..."
                className={classes.textField}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <div className='content-button-group'>
                {renderButtons()}
            </div>
            <Carousel slidesToScroll='1'>
                <div>{Iframe}</div>
                <div>{Iframe}</div>
                <div>{Iframe}</div>
            </Carousel>
        </div>
    );
};

export default Content;
