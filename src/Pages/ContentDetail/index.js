import React , { useEffect,useState } from 'react'

// STYLE
import './style.css'

// COMPONENT
import { BreadCrumbs ,  User , QA } from '../../Components/ContentDetail'
import { Item as ItemList } from '../../Components/ContentList'

// IMAGES
import newsImg from "../../Assets/Images/news-img.png"
import fb from '../../Assets/Images/Facebook.png'
import wa from '../../Assets/Images/wa-f.png'


function ContentDetail (props) {

    const {
        dataNews , 
        getData
    } = props

    // LOCAL STATE
    const [detailData,setDetailData] = useState(null)

    // useEffect(()=>{
    //     axios({
    //         method : 'GET',
    //         url : `${SWAGGER_URL}/contents`,
    //         headers : {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //         }
    //     }).
    //     then(({data})=>{
    //         setDataNews(data.data)
    //         console.log(data , ' <<< VALUE DATA')
    //     })
    //     .catch(err=>{
    //         console.log(err.response , ' <<<< ERROR RESPONS ><><><>><><')
    //     })
    // },[])

    useEffect(()=>{
        if (dataNews) {
            let id = props.location.search.split("&")[1].split('=')[1]
            console.log(dataNews.filter(e=>e._id === id) , ' <<<<< **************************** HASIL FILTER DETAIL')
            setDetailData(dataNews.filter(e=>e._id === id)[0])
        }
    },[dataNews])

    return (
        <div className="content-detail-13">
            <BreadCrumbs {...props} detailData={detailData}/>
            <User detailData={detailData}/>
            <div className="c2">
                {/* { props && props.location && props.location.search && props.location.search.split("=")[1].split("%").join(" ").split('&')[0]} */}
                {detailData && detailData.content.title}
                {/* Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  */}
            </div>
            <img
                src={ detailData && detailData.content ? detailData.content.images[0] : newsImg}
                className="c3"
            />
            <div className="c4">
                <div className="fb">
                    <img
                        src={fb}
                    />
                    <div>
                        Share
                    </div>
                </div>
                <div className="fb" style={{backgroundColor : "#51BE76",marginLeft : 6}}>
                    <img
                        src={wa}
                    />
                    <div>
                        Chat
                    </div>
                </div>
            </div>
            <div className="c5">
                Mau Langganan Konten Seperti Ini atau Lebih Advance Sesuai Minat Anda? Silahkan Daftar Disini Sekarang.
            </div>
            <div className="c6">
                {detailData && detailData.content.desc}
            </div>
            {
                detailData &&
                <QA
                    detailData={detailData}
                    getData={getData}
                />
            }
            <div className="c7">
                <div>
                    INFO TERKINI
                </div>
            </div>
            <div className="c2" style={{marginTop : 28}}>
                { props && props.location && props.location.search && props.location.search.split("=")[1].split("%").join(" ")}
                {/* Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  */}
            </div>
            <img
                src={newsImg}
                className="c3"
            />
            <div className="c6">
                Hello readers,

                Have you ever seen a mom drag a screaming kid to a tuition center? Because I’m that kid. I hated going to these extra classes and cried a ton on the way there. But that never deterred my Asian mom from signing me up for them – heck, I even had tuition for arts and crafts when I was young.

                So when people say that there’s money to be made in edtech, you can bet your life I believe them. TikTok parent company ByteDance is also a believer – it has allocated over US$600 million to its online education-related efforts this year. With a lot of money to burn, can it produce a TikTok-equivalent in the edtech market?
            </div>
            <div className="c9">

            </div>
            <div className="c8">
                <h3>
                    Featured Posts
                </h3>
            </div>
            {
                dataNews && dataNews.filter(e=>!e.isBlog).map((e,index)=>{
                    return (
                        <ItemList
                            e={e}
                            index={index}
                        />
                    )
                })
            }
             <div className="c9">

            </div>
            
        </div>
    )

}

export default ContentDetail