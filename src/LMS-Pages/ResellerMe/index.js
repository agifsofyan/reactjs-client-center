import React, { useEffect } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Select, Collapse } from 'antd';
import './lmsresellerme.css';

const { Option } = Select;
const { Panel } = Collapse;

const LMSResellerMe = () => {
    useEffect(() => {
        document.title = 'LMS Reseller Me';
    });

    const profile = [
        {
            image: 'https://miro.medium.com/max/2048/1*UpK-UrHOeshQf8gxcRnjpg.jpeg',
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            phone: '08123456789',
        },
    ];

    const renderProfile = () => {
        return profile.map((val,index) => {
            return (
                <div key={index} className='resellerme-profile-container'>
                    <img src={val.image} alt='pp' className='resellerme-profile-photo' />
                    <div className='resellerme-profile-detail'>
                        <div className='resellerme-profile-txt'>
                            <b>Name:</b> &nbsp; {val.name}
                        </div>
                        <div className='resellerme-profile-txt'>
                            <b>Email:</b> &nbsp; {val.email}
                        </div>
                        <div className='resellerme-profile-txt'>
                            <b>Phone:</b> &nbsp; {val.phone}
                        </div>
                    </div>
                </div>
            );
        });
    };

    const weeks = [
        { week: 'Week 1 - 7' },
        { week: 'Week 8 - 14' },
        { week: 'Week 15 - 21' },
        { week: 'Week 22 - 28' },
        { week: 'Week 29 - 31' },
    ];

    const renderFilter = () => {
        return weeks.map((val,index) => {
            return (
                <React.Fragment key={index}>
                    <Option value={val.week}>
                        {val.week}
                    </Option>
                </React.Fragment>
            );
        });
    };

    const accordionText = `A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.`;

    const renderAccordion = () => {
        return weeks.map((val,index) => {
            return (
                <React.Fragment key={index}>
                    <Panel header={val.week} key={index + 1}>
                        <p>{accordionText}</p>
                    </Panel>
                </React.Fragment>
            );
        });
    };

    const sellableImg = 'https://madebymany-v2-next.s3.amazonaws.com/uploads/blog/featured_image/1337/large_Whatisadigitalproduct_v2.jpg';

    const renderSellables = () => {
        return [0,1,2].map(() => {
            return (
                <div className='resellerme-sellable-container'>
                    <div className='resellerme-sellable-top-part'>
                        <img 
                            src={sellableImg} 
                            alt='sellable' 
                            className='resellerme-sellable-image' 
                        />
                        <div className='resellerme-sellable-details'>
                            <div className='resellerme-sellable-details-txt'>
                                <b>BOE Business Master</b>
                            </div>
                            <div className='resellerme-sellable-details-txt'>
                                This is the description for the mentioned product and here it is i guess.
                            </div>
                            <div className='resellerme-sellable-details-txt'>
                                Mentored by <b>John Doe</b>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='resellerme-sellable-details-url'>
                            <b>PRODUCT URL</b>
                        </div>
                        <div className='resellerme-sellable-details-link'>
                            https://laruno.id/products?name=product-name
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className='root'>
            {/* PROFILE */}
            <div className='resellerme-profile-section'>
                {renderProfile()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* COMISSION */}
            <div className='resellerme-comission-section'>
                <div className='resellerme-comission-title'>
                    Data Pembayaran Komisi
                </div>
                <Form style={{marginTop:'20px'}}>
                    <FormGroup>
                        <Label>Nama Bank</Label>
                        <Input type="text" placeholder="input value here..." />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nomor Rekening</Label>
                        <Input type="text" placeholder="input value here..." />
                    </FormGroup>
                    <FormGroup>
                        <Label>Cabang Bank</Label>
                        <Input type="text" placeholder="input value here..." />
                    </FormGroup>
                </Form>
                <button className='resellerme-comission-update-btn'>
                    <b>Update Data</b>
                </button>
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* STATISTICS */}
            <div className='resellerme-statistics-section'>
                <div className='resellerme-statistics-title'>
                    Data Statistik
                </div>
                <div className='resellerme-statistics-filter-div'>
                    <Select defaultValue='All' className='resellerme-statistics-filter'>
                        {renderFilter()}
                    </Select>
                </div>
                <div className='resellerme-statistics-accordion-div'>
                    <Collapse accordion>
                        {renderAccordion()}
                    </Collapse>
                </div>
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* SELLABLE */}
            <div className='resellerme-sellable-section'>
                <div className='resellerme-sellable-title'>
                    Sellable Products
                </div>
                <div style={{marginTop:'20px'}}>
                    {renderSellables()}
                </div>
            </div>
        </div>
    );
};

export default LMSResellerMe;
