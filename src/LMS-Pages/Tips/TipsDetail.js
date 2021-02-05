import React, { useEffect } from 'react';
import TopicSection from '../../Components/TopicSection';
import { Breadcrumb, Select, Input, Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import './TipsDetail.css';

const { Option } = Select;

const TipsDetail = () => {
    useEffect(() => {
        document.title = 'LMS Tips Detail';
    });

    const breadCrumbs = [
        "Laruno",
        "Tips",
        "Inside ByteDance's edtech expansion",
    ];

    const comments = [
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
    ];

    const renderArticle = () => {
        return [0].map((val,index) => {
            return (
                <div key={index}>
                    <Breadcrumb className='tipsdetail-breadcrumbs'>
                        <Breadcrumb.Item>
                            {breadCrumbs[0]}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {breadCrumbs[1]}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {breadCrumbs[2]}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='tipsdetail-author-details'>
                        <img 
                            src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' 
                            alt='author' 
                            className='tipsdetail-author-picture' 
                        />
                        <div className='tipsdetail-author-desc'>
                            John Doe ● 4h ago ● 5 min read
                        </div>
                    </div>
                    <div className='tipsdetail-article-section'>
                        <div className='tipsdetail-article-title'>
                            <b>Inside ByteDance's edtech expansion</b>
                        </div>
                        <img 
                            src="https://img.freepik.com/free-photo/front-view-shopping-cart-with-lots-coins-jar_23-2148569118.jpg?size=626&ext=jpg"
                            alt="article illustration" 
                            className="tipsdetail-article-picture"
                        />
                        <div className='tipsdetail-article-social-share'>
                            <button className='tipsdetail-article-facebook'>
                                Facebook
                            </button>
                            <button className='tipsdetail-article-whatsapp'>
                                Whatsapp
                            </button>
                        </div>
                        <div className='tipsdetail-article-showoff'>
                            Every day, 100k+ smart people read our newsletter. You can sign up here. 🔥
                        </div>
                        <div className='tipsdetail-article-paragraphs'>
                            Hello readers, <br/> Have you ever seen a mom drag a screaming kid to a tuition center? Because I’m that kid. I hated going to these extra classes and cried a ton on the way there. But that never deterred my Asian mom from signing me up for them – heck, I even had tuition for arts and crafts when I was young. <br/> So when people say that there’s money to be made in edtech, you can bet your life I believe them. TikTok parent company ByteDance is also a believer – it has allocated over US$600 million to its online education-related efforts this year. With a lot of money to burn, can it produce a TikTok-equivalent in the edtech market?
                        </div>
                    </div>
                    <div>
                        <Select
                            showSearch
                            className='tipsdetail-comment-sort'
                            placeholder="Sort by"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option>Newest</Option>
                            <Option>Oldest</Option>
                        </Select>
                        <div className='tipsdetail-comment-user-section'>
                            <img
                                src='https://i.pinimg.com/originals/2d/0a/ee/2d0aee4df7929611bd7bea99af17283f.jpg'
                                alt='user'
                                className='tipsdetail-comment-user-image'
                            />
                            <Input placeholder="Your comment here..." />
                        </div>
                        <List
                            className="comment-list"
                            header={`${comments.length} replies`}
                            itemLayout="horizontal"
                            dataSource={comments}
                            renderItem={item => (
                                <li>
                                    <Comment
                                    actions={item.actions}
                                    author={item.author}
                                    avatar={item.avatar}
                                    content={item.content}
                                    datetime={item.datetime}
                                    />
                                </li>
                            )}
                        />
                    </div>
                </div>
            );
        });
    };

    const renderSpotlight = () => {
        return [0].map((val,index) => {
            return (
                <div key={index} style={{marginTop:'10px'}}>
                    <span className='tipsdetail-spotlight-tag'>
                        News Spotlight
                    </span>
                    <div className='tipsdetail-spotlight-title'>
                        Say hello to Singapore's first digital banks
                    </div>
                    <img 
                        src='https://cdn.techinasia.com/wp-content/uploads/2020/12/bytedance-dali.gif'
                        alt='spotlight'
                        className='tipsdetail-spotlight-image'
                    />
                    <div className='tipsdetail-spotlight-article'>
                        After months of suspense, Singapore finally unveiled the winners for its digital bank licenses. <br/><br/> * Drum roll please: Sea Group and the Grab Holdings and Singtel partnership received the digital full bank licenses. Meanwhile, Ant Group as well as the Greenland Financial Holdings, Linklogis Hong Kong, and Beijing Co-operative Equity Investment Fund Management consortium were awarded the digital wholesale bank licenses. <br/><br/> * Grab-Singtel made its moves: The Grab-Singtel consortium didn’t miss a beat. Shortly after the announcement, it appointed Citigroup veteran Charles Wong as its chief executive and said that it will set up a team of 200 people by the end 2021. <br/><br/> * Razer fintech looks elsewhere: While Razer Fintech failed to receive the digital bank license, the company announced plans to roll out Razer Youth Bank in markets such as Malaysia and the Philippines instead.
                    </div>
                </div>
            );
        });
    };

    const renderBlogs = () => {
        return [0,1,2].map(() => {
            return (
                <div className='larunoblog-spotlight-container'>
                    <img 
                        src='https://www.pewresearch.org/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png' 
                        alt='recommentation' 
                        className='larunoblog-spotlight-product-image' 
                    />
                    <div className='larunoblog-spotlight-product-details'>
                        <div className='larunoblog-spotlight-product-name'>
                            <b>Inside ByteDance's edtech expansion</b>
                        </div>
                        <div className='larunoblog-spotlight-product-desc'>
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </div>
                        <div className='larunoblog-spotlight-author-section'>
                            <img 
                                src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg'
                                alt='author'
                                className='larunoblog-spotlight-author-image'
                            />
                            <div className='larunoblog-spotlight-author-desc'>
                                John Doe ● 4h ago ● 5 min read
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className='root'>
            {/* SECTION CAROUSEL */}
            <div style={{marginTop:'20px'}}>
                <TopicSection tipsTab={true} />
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* ARTICLE */}
            <div className='article-section'>
                {renderArticle()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* SPOTLIGHT */}
            <div className='spotlight-section'>
                {renderSpotlight()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* BLOG */}
            <div className='larunoblog-section'>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'5px'}}>
                    <div className='larunoblog-title'>
                        Laruno's Blogs
                    </div>
                    <div className='larunoblog-see-more'>
                        See more
                    </div>
                </div>
                <div className='larunoblog-spotlight-renderer'>
                    {renderBlogs()}
                </div>
            </div>
        </div>
    );
};

export default TipsDetail;
