import React, { useEffect, useState } from 'react';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import moduleArt from '../../Assets/Images/module.jpg'; 
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import './module.css';

const { TextArea } = Input;

const ActionPlan = () => {
    return [0,1,2,3,4,5,6,7,8].map((val, index) => {
        return (
            <div className='action-card'>
                <div className='action-txt'>
                    Lorem ipsum dolor sit amet. kok dummy text gini amat ya, udah kehabisan ide, maap ya hehehe.
                </div>
                <div className='action-icon-button'>
                    <img 
                        src='https://www.letsonenterprises.com/wp-content/uploads/2015/07/reachout.jpg' 
                        alt='icon' 
                        className='action-icon' 
                    />
                    <button className='action-button'>
                        Action
                    </button>
                </div>
            </div>
        );
    });
};

const JawabPertanyaan = () => {
    return [0].map((val, index) => {
        return (
            <div>
                <Link to='/lms-module' style={{
                    textDecoration:'none',
                    color:'black',
                }}>
                    <button style={{
                        marginBottom:'10px',
                    }}>
                        Back
                    </button>
                </Link>
                <div style={{
                    padding:'10px 15px',
                    border:'1px solid grey',
                    borderRadius:'5px',
                    marginBottom:'10px',
                }}>
                    Lorem Ipsum dolor sit amet. kok dummy text gini amat sih ya wkwkwk. Hmm oke deh gapapa.
                </div>
                <TextArea rows={4} placeholder='Jawaban anda disini...' style={{marginBottom:'10px'}} />
                <div style={{
                    display:'flex',
                    justifyContent:'flex-end',
                }}>
                    <button style={{
                        backgroundColor:'#FF4500',
                        color:'white',
                        borderRadius:'5px',
                        padding:'7.5px 15px',
                        border:'none',
                    }}>
                        Jawab
                    </button>
                </div>
            </div>
        );
    });
};

const TugasAnda = () => {
    return [0,1,2,3,4,5,6,7,8].map((val, index) => {
        return (
            <div className='action-card'>
                <div className='action-txt'>
                    Lorem ipsum dolor sit amet. kok dummy text gini amat ya, udah kehabisan ide, maap ya hehehe.
                </div>
                <div className='action-icon-button'>
                    <img 
                        src='https://static.thenounproject.com/png/1596429-200.png' 
                        alt='icon' 
                        className='action-icon' 
                    />
                    <button className='action-button'>
                        JAWAB
                    </button>
                </div>
            </div>
        );
    });
};

const MindMap = () => {
    return [0].map(() => {
        return (
            <div>
                <img 
                    src='https://learningfundamentals.com.au/wp-content/uploads/Strategies-Plant-based-lifestyle-mind-map.jpg' 
                    alt='mindmap' 
                    style={{
                        width:'100%',
                    }}
                />
            </div>
        );
    });
};

const tabList = [
    {
        id: 1,
        title: 'Action Plan',
        content: <ActionPlan />,
    },
    {
        id: 2,
        title: 'Jawab Pertanyaan',
        content: <JawabPertanyaan />,
    },
    {
        id: 3,
        title: 'Tugas Anda',
        content: <TugasAnda />,
    },
    {
        id: 4,
        title: 'Mind Map',
        content: <MindMap />,
    },
];

const FilterTab = ({
    title = "",
    onItemClicked = () => console.error('You passed no action'),
    isActive = false
}) => {
    return (
        <div 
            className={isActive ? `filter choosen` : `filter`}
            onClick={onItemClicked}
        >
            {title}
        </div>
    );
};

const AnswerModule = (props) => {
    useEffect(() => {
        document.title = 'LMS Module';
        window.scrollTo(0,0);
    });

    const [active, setActive] = useState(2);

    return (
        <div className='root'>
            {/* WELCOME VIDEO */}
            <WelcomeVideo />

            {/* DIVIDER */}
            <div className='divider' {...props} />

            {/* SECTION CAROUSEL */}
            <TopicSection moduleTab={true} {...props} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* ART */}
            <div className='module-art-div'>
                <img 
                    src={moduleArt} 
                    alt='module art'
                    className='module-art'
                />
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* FILTER */}
            <div className='filter-container'>
                {tabList.map(({ id, title }) => 
                    <FilterTab 
                        key={title}
                        title={title}
                        onItemClicked={() => setActive(id)}
                        isActive={active === id}
                    />
                )}
            </div>

            {/* MODULE CONTENT */}
            <div className='action-section'>
                {tabList.map(({ id, content }) => {
                    return active === id
                    ? content
                    : null
                })}
            </div>

            {/* FOOTER */}
            <div className='lms-module-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default AnswerModule;
