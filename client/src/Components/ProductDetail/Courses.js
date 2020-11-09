import React, { useContext } from 'react';
import { Accordion, AccordionContext, Card, useAccordionToggle } from 'react-bootstrap';
import down from '../../Assets/down-arrow-thin.png';
import up from '../../Assets/up-arrow-thin.png';

const CustomToggle = ({ eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <>
            {
                isCurrentEventKey
                ?
                <img 
                    src={up} 
                    alt='up' 
                    height={20} 
                    onClick={decoratedOnClick} 
                    style={{cursor:'pointer'}} 
                />
                :
                <img 
                    src={down} 
                    alt='down' 
                    height={20} 
                    onClick={decoratedOnClick} 
                    style={{cursor:'pointer'}} 
                />
            }
        </>
    );
};

const Courses = (props) => {
    return (
        <React.Fragment>
            <div style={styles.title}>
                Course : {props.title}
            </div>
            <div style={styles.accordion}>
                <Accordion style={styles.container}>
                    <Card style={styles.card}>
                        <Card.Header>
                            <span style={styles.name}>
                                Content no. 1
                            </span>
                            <span style={styles.toggle}>
                                <CustomToggle eventKey="1" />
                            </span>
                                <span style={styles.time}>
                                30 minutes
                            </span>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                This course content number 1<br/>
                                The contents of this course are all based on my work experience at several firms, including Goldman Sachs, the consulting industry at Accenture, a few companies I have started, the hedge fund industry where I worked at Citadel and also in the venture capital sector (the firm I founded had a venture capital investment in Facebook).
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Header>
                            <span style={styles.name}>
                                Content no. 2
                            </span>
                            <span style={styles.toggle}>
                                <CustomToggle eventKey="2" />
                            </span>
                            <span style={styles.time}>
                                30 minutes
                            </span>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                This course content number 2<br/>
                                The contents of this course are all based on my work experience at several firms, including Goldman Sachs, the consulting industry at Accenture, a few companies I have started, the hedge fund industry where I worked at Citadel and also in the venture capital sector (the firm I founded had a venture capital investment in Facebook).
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Header>
                            <span style={styles.name}>
                                Content no. 3
                            </span>
                            <span style={styles.toggle}>
                                <CustomToggle eventKey="3" />
                            </span>
                            <span style={styles.time}>
                                30 minutes
                            </span>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                This course content number 3<br/>
                                The contents of this course are all based on my work experience at several firms, including Goldman Sachs, the consulting industry at Accenture, a few companies I have started, the hedge fund industry where I worked at Citadel and also in the venture capital sector (the firm I founded had a venture capital investment in Facebook).
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Header>
                            <span style={styles.name}>
                                Content no. 4
                            </span>
                            <span style={styles.toggle}>
                                <CustomToggle eventKey="4" />
                            </span>
                            <span style={styles.time}>
                                30 minutes
                            </span>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                This course content number 4<br/>
                                The contents of this course are all based on my work experience at several firms, including Goldman Sachs, the consulting industry at Accenture, a few companies I have started, the hedge fund industry where I worked at Citadel and also in the venture capital sector (the firm I founded had a venture capital investment in Facebook).
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Header>
                            <span style={styles.name}>
                                Content no. 5
                            </span>
                            <span style={styles.toggle}>
                                <CustomToggle eventKey="5" />
                            </span>
                            <span style={styles.time}>
                                30 minutes
                            </span>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                This course content number 5<br/>
                                The contents of this course are all based on my work experience at several firms, including Goldman Sachs, the consulting industry at Accenture, a few companies I have started, the hedge fund industry where I worked at Citadel and also in the venture capital sector (the firm I founded had a venture capital investment in Facebook).
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </React.Fragment>
    );
};

const styles = {
    title: {
        fontSize: '1.25rem',
        fontWeight: '500',
        margin: '0.5rem 1rem 0rem 3rem',
    },
    accordion: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1.25rem 3rem',
        borderRadius: '5rem',
    },
    container: {
        width: '100rem',
    },
    card: {
        display: 'flex',
    },
    name: {
        fontSize: '1rem',
        fontWeight: '400',
    },
    toggle: {
        float: 'right',
    },
    time: {
        float: 'right',
        padding: '0rem 1rem',
        fontSize: '1rem',
        fontWeight: '400',
    },
};

export default Courses;
