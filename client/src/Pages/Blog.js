import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../Components/Blog';
import { keepLogin } from '../Redux/Actions/UserAction';
import top1 from '../Assets/Images/top1.png';
import top2 from '../Assets/Images/top2.png';
import top3 from '../Assets/Images/top3.png';
import latest from '../Assets/Images/latest.png';
import author from '../Assets/Images/author.png';
import '../Assets/Fonts.css';

const Blog = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);

    useEffect(() => {
        document.title = 'Laruno Blog';
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    return (
        <React.Fragment>
            <Header
                name={userData.name}
            />
            {/* Top Posts */}
            <div style={styles.container}>
                <span style={styles.top}>
                    Top Posts
                </span>
                <div style={styles.topWrapper}>
                    <div style={styles.box}>
                        <img src={top1} alt='top' style={styles.topImage} />
                        <div style={styles.content}>
                            <span style={styles.premium}>
                                FEATURED PREMIUM CONTENT
                            </span>
                            <div style={styles.topTitle}>
                                Traveloka is nearly profitable despite Covid-19
                            </div>
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.box}>
                        <img src={top2} alt='top' style={styles.topImage} />
                        <div style={styles.content}>
                            <span style={styles.premium}>
                                FEATURED PREMIUM CONTENT
                            </span>
                            <div style={styles.topTitle}>
                                Bangladesh needs to rebrand itself to attract more investors
                            </div>
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.box}>
                        <img src={top3} alt='top' style={styles.topImage} />
                        <div style={styles.content}>
                            <span style={styles.premium}>
                                FEATURED PREMIUM CONTENT
                            </span>
                            <div style={styles.topTitle}>
                                Zomato shuts Pro subscription service in Indonesia, Philippines
                            </div>
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Posts */}
            {/* Latest Posts */}
            <div style={styles.container}>
                <span style={styles.latest}>
                    Latest Posts
                </span>
                <div style={styles.latestWrapper}>
                    <div style={styles.lateContainer}>
                        <img src={latest} alt='latest' style={styles.lateImage} />
                        <div style={styles.lateContent}>
                            <div style={styles.lateHead}>
                                Proterra Investment Partners to invest $100m in plant-based food startup's factory in Singapore
                            </div>
                            <div style={styles.lateSubHead}>
                                The new subsidiary will create a supply chain to serve manufacturing and distribution partners of Eat Just's flagship product Just Egg across the region.
                            </div>
                            <div style={styles.separator} />
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.lateContainer}>
                        <img src={latest} alt='latest' style={styles.lateImage} />
                        <div style={styles.lateContent}>
                            <div style={styles.lateHead}>
                                Proterra Investment Partners to invest $100m in plant-based food startup's factory in Singapore
                            </div>
                            <div style={styles.lateSubHead}>
                                The new subsidiary will create a supply chain to serve manufacturing and distribution partners of Eat Just's flagship product Just Egg across the region.
                            </div>
                            <div style={styles.separator} />
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.lateContainer}>
                        <img src={latest} alt='latest' style={styles.lateImage} />
                        <div style={styles.lateContent}>
                            <div style={styles.lateHead}>
                                Proterra Investment Partners to invest $100m in plant-based food startup's factory in Singapore
                            </div>
                            <div style={styles.lateSubHead}>
                                The new subsidiary will create a supply chain to serve manufacturing and distribution partners of Eat Just's flagship product Just Egg across the region.
                            </div>
                            <div style={styles.separator} />
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.latestWrapper}>
                    <div style={styles.lateContainer}>
                        <img src={latest} alt='latest' style={styles.lateImage} />
                        <div style={styles.lateContent}>
                            <div style={styles.lateHead}>
                                Proterra Investment Partners to invest $100m in plant-based food startup's factory in Singapore
                            </div>
                            <div style={styles.lateSubHead}>
                                The new subsidiary will create a supply chain to serve manufacturing and distribution partners of Eat Just's flagship product Just Egg across the region.
                            </div>
                            <div style={styles.separator} />
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.lateContainer}>
                        <img src={latest} alt='latest' style={styles.lateImage} />
                        <div style={styles.lateContent}>
                            <div style={styles.lateHead}>
                                Proterra Investment Partners to invest $100m in plant-based food startup's factory in Singapore
                            </div>
                            <div style={styles.lateSubHead}>
                                The new subsidiary will create a supply chain to serve manufacturing and distribution partners of Eat Just's flagship product Just Egg across the region.
                            </div>
                            <div style={styles.separator} />
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.lateContainer}>
                        <img src={latest} alt='latest' style={styles.lateImage} />
                        <div style={styles.lateContent}>
                            <div style={styles.lateHead}>
                                Proterra Investment Partners to invest $100m in plant-based food startup's factory in Singapore
                            </div>
                            <div style={styles.lateSubHead}>
                                The new subsidiary will create a supply chain to serve manufacturing and distribution partners of Eat Just's flagship product Just Egg across the region.
                            </div>
                            <div style={styles.separator} />
                            <div style={styles.authorSection}>
                                <img src={author} alt='author' style={styles.author} />
                                <div style={styles.authorDetail}>
                                    John Doe . 17h ago . 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest Posts */}
        </React.Fragment>
    );
};

const styles = {
    container: {
        // border: '1px solid black',
        margin: '2rem 10rem',
    },
    top: {
        fontSize: '1.75rem',
        fontFamily: 'Quicksand',
        paddingBottom: '0.75rem',
        borderBottom: '0.1rem solid black',
    },
    topWrapper: {
        // border: '1px solid black',
        margin: '3rem 0rem',
    },
    box: {
        margin: '2rem 0rem',
        height: '17.5rem',
        boxShadow: '0 0 0.25rem #a3a3a3',
        display: 'flex',
    },
    topImage: {
        cursor: 'pointer',
        height: '17.5rem',
        width: '35rem',
    },
    content: {
        margin: '2rem 4rem',
    },
    premium: {
        borderBottom: '0.15rem solid red',
        paddingBottom: '0.5rem',
        fontSize: '1.125rem',
    },
    topTitle: {
        cursor: 'pointer',
        marginTop: '1.75rem',
        fontSize: '1.8rem',
        lineHeight: '2.25rem',
        fontFamily: 'Playfair Display',
    },
    authorSection: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',
    },
    author: {
        height: '2.5rem',
    },
    authorDetail: {
        fontFamily: 'Raleway',
        marginLeft: '0.75rem',
        fontSize: '0.9rem',
        color: '#595959',
    },
    latest: {
        paddingTop: '2rem',
        fontSize: '1.75rem',
        fontFamily: 'Quicksand',
        borderBottom: '0.1rem solid black',
        paddingBottom: '0.75rem',
    },
    latestWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    lateContainer: {
        marginTop: '2.75rem',
        marginLeft: '1.35rem',
        marginRight: '1.35rem',
    },
    lateImage: {
        height: '12.5rem',
    },
    lateContent: {
        width: '20rem',
    },
    lateHead: {
        marginTop: '1rem',
        fontWeight: '600',
        fontSize: '1.15rem',
    },
    lateSubHead: {
        marginTop: '0.35rem',
        fontSize: '0.9rem',
    },
    separator: {
        borderBottom: '0.05rem solid #696969',
        margin: '0.5rem 0rem',
    },
};

export default Blog;