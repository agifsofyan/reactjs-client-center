import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import './content.css';

const Trending = () => {
    const renderVideos = () => {
        return [0,1,2].map(() => {
            return (
                <div style={{
                    marginRight: '20px',
                    width: '100%',
                    borderRadius: '5px',
                    overflow: 'hidden',
                }}>
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
                </div>
            );
        });
    };

    return (
        <div className='content-video-group'>
            {renderVideos()}
        </div>
    );
};

const Content = () => {
    return [0].map(() => {
        return (
            <div>
                ini Content
            </div>
        );
    });
};

const Topic = () => {
    return [0].map(() => {
        return (
            <div>
                ini Content
            </div>
        );
    });
};

const tabList = [
    {
        id: 1,
        title: "Trending",
        content: <Trending />,
    },
    {
        id: 2,
        title: "Content",
        content: <Content />,
    },
    {
        id: 3,
        title: "Topic",
        content: <Topic />,
    },
];

const FilterTab = ({
    title = "",
    onItemClicked = () => console.error('You passed no action'),
    isActive = false,
}) => {
    return (
        <div>
            <button 
                onClick={onItemClicked}
                className={
                    isActive 
                    ? `content-btn active-btn`
                    : `content-btn`
                }
            >
                {title}
            </button>
        </div>
    );
};

const ContentSection = () => {
    const [active, setActive] = useState(1);

    return (
        <div className='content-section'>
            {/* SEARCH */}
            <TextField
                variant="outlined"
                placeholder="Search here..."
                style={{
                    width: '100%',
                    marginBottom: '20px',
                    boxShadow: '0 0 5px 1.25px #E6E6E6',
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {/* FILTER */}
            <div className='content-button-group'>
                {tabList.map(({ id, title }) => 
                    <FilterTab
                        key={title}
                        title={title}
                        onItemClicked={() => setActive(id)}
                        isActive={active === id}
                    />
                )}
            </div>

            {/* LIST */}
            <div>
                {tabList.map(({ id, content }) => {
                    return active === id
                    ? content
                    : null
                })}
            </div>
        </div>
    );
};

export default ContentSection;
