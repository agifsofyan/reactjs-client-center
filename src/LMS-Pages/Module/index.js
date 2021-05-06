import React, { useEffect, useState } from 'react';

// MODULE
import { Link } from 'react-router-dom';
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';

// COMPONENTS
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';

// GLOBAL ACTION
import { setAvailableMenu } from '../../Redux/Actions/userAction';

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// IMAGES
import moduleArt from '../../Assets/Images/module.jpg';

// CSS
import './module.css';

const { TextArea } = Input;

const LoadingComponent = () => {
    return (
        <div className='action-card' style={{boxShadow : "none",border : "none",width : "auto"}}>
            {
                [0,1].map((e)=>{
                    return (
                        <Skeleton
                            width={200}
                            height={185}
                            style={{margin: "5px 20px 10px 5px",borderRadius : 15}}
                            duration={0.5}
                        />
                    )
                })
            }
        </div>
    )
}

const ActionPlan = ({data,loading,slug}) => {
    if (loading) {
        return (<LoadingComponent/>)
    }else {
        return data.map((val, index) => {
            return (
                <div className='action-card'>
                    <div className='action-txt'>
                        {val.value}
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
    }
};

const JawabPertanyaan = (props) => {

    const {
        data,
        loading,
        slug,
        ShQuestion,
        setShQuestion
       } 
        = props


    const [input,setInput] = useState(null)

    const handleDb = () => {
        // let slug = props.location.pathname.split('/')[2]
        axios({
            method : 'POST',
            // url : `${SWAGGER_URL}/contents`,
            // url : `${SWAGGER_URL}/userproducts?content_post_type=webinar&as_user=false`,
            url : `${SWAGGER_URL}/lms/${slug}/module/${ShQuestion._id}/answer`,
            data : {
                answer : input
            },
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            // alert(' LOL <<<<')
            console.log(data)
        })
        .catch(err=>{
            console.log(err ,  ' <<< ERROR ')
        })
    }

    // <Link to='/lms-module-answer' style={{textDecoration:'none', color:'black'}}>
    if (loading) {
        return (<LoadingComponent/>)
    }else {
        if (ShQuestion) {
            return (
                <div style={{width : "100%"}}>
                    <button 
                        onClick={e=>setShQuestion(null)}
                        style={{
                        marginBottom:'10px',
                    }}>
                        Back
                    </button>
                    {/* <Link to='/lms-module' style={{
                        textDecoration:'none',
                        color:'black',
                    }}>
                    </Link> */}
                    <div style={{
                        padding:'10px 15px',
                        border:'1px solid grey',
                        borderRadius:'5px',
                        marginBottom:'10px',
                    }}>
                        {ShQuestion.value}
                    </div>
                    <TextArea  onChange={e=>setInput(e.target.value)} rows={4} placeholder='Jawaban anda disini...' style={{marginBottom:'10px'}} />
                    <div style={{
                        display:'flex',
                        justifyContent:'flex-end',
                    }}>
                        <button 
                            style={{
                                backgroundColor:'#FF4500',
                                color:'white',
                                borderRadius:'5px',
                                padding:'7.5px 15px',
                                border:'none',
                                cursor: "pointer"
                            }}
                            onClick={e=>handleDb()}
                        >
                            Jawab
                        </button>
                    </div>
                </div>
            )
        }else {
            return data.map((val, index) => {
                return (
                    <div
                        // href={`/lms-module-answer/${slug}`}
                        // target="_blank"
                        onClick={e=>setShQuestion(val)}
                        className='action-card'
                        // onClick={e=>}
                    >
                        <div className='action-txt'>
                            {val.value}
                        </div>
                        <div className='action-icon-button'>
                            <img 
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Noun_Project_question_mark_icon_1101884_cc.svg/1200px-Noun_Project_question_mark_icon_1101884_cc.svg.png' 
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
        }
    }
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
        Content : ActionPlan ,
        key : "action",
        apiKey : "action_module"
    },
    {
        id: 2,
        title: 'Jawab Pertanyaan',
        Content : JawabPertanyaan,
        key : "question",
        apiKey : "question_module"
    },
    {
        id: 3,
        title: 'Tugas Anda',
        Content : TugasAnda ,
        key : "mission",
        apiKey : "mission_module"
    },
    {
        id: 4,
        title: 'Mind Map',
        Content : MindMap ,
        key : "mindmap",
        apiKey : "mindmap_module"
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

const Module = (props) => {

    // USE DISPATCH
    const dispatch = useDispatch();

    // LOCAL STATE
    const [loading,setLoading] = useState(false)
    const [allW,setAllW] = useState(null)
    const [data,setData] = useState([])
    const [ShQuestion,setShQuestion] = useState(null)
    // const [tabList,set]

    useEffect(() => {
        document.title = 'LMS Module';
    });

    const [active, setActive] = useState(1);

    const getData = (type,apiKey) => {
        setLoading(true)
        let slug = props.location.pathname.split('/')[2]
        axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            // url : `${SWAGGER_URL}/userproducts?content_post_type=webinar&as_user=false`,
            url : `${SWAGGER_URL}/lms/${slug}/module/${type}`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            setLoading(false)
            setAllW(data.data)
            setData(data.data[apiKey])
            dispatch(setAvailableMenu(data.data.available_menu))
            console.log(data.data[apiKey] , ' <<<< VALUE HERE LOL &&&&&')
            console.log(data , ' <<< VALUE MODULE HERE ***********888')
        })
        .catch(err=>{
            setLoading(false)
            console.log(err , ' <<< ERROR HERE LOL')
        })
    }

    useEffect(()=>{
        getData("action","action_module")
    },[])

    return (
        <div className='root'>
            
            {/* WELCOME VIDEO */}
            <WelcomeVideo data={allW}/>

            {/* DIVIDER */}
            <div className='divider' />

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
                {tabList.map(({ id, title , key , apiKey }) => 
                    <FilterTab 
                        key={title}
                        title={title}
                        onItemClicked={() => [setLoading(true),setActive(id),getData(key,apiKey),setShQuestion(null)]}
                        isActive={active === id}
                    />
                )}
            </div>

            {/* MODULE CONTENT */}
            <div className='action-section'>
                {tabList.map(({ id, Content }) => {
                    return active === id
                    ?   <Content 
                            data={data} 
                            loading={loading} 
                            slug={props.location.pathname.split('/')[2]}
                            ShQuestion={ShQuestion}
                            setShQuestion={setShQuestion}
                            {...props}
                        />
                    : null
                })}
            </div>

            <div style={{marginBottom : 38}}>

            </div>

            {/* FOOTER */}
            <div className='lms-module-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Module;
