import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

// PAGES
import ContentList from '../ContentList'
import ContentDetail from '../ContentDetail'

function ContentContainer (props) {

    const [dataNews,setDataNews] = useState(null)
    const [NewsTemp,setNewsTemp] = useState(null)

    useEffect(()=>{
        getData()
    },[])

    let getData = () => {
        axios({
            method : 'GET',
            url : `${SWAGGER_URL}/contents`,
            // url : `${SWAGGER_URL}/userproducts?trending=true&favorite=false&as_user=false&done=false&offset=1&limit=10&sortby=created_at&sortval=desc`,
            // url : `${SWAGGER_URL}/userproducts`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).
        then(({data})=>{
            console.log(data.data , ' <<< VALUE DATA CONTENT HEREE <<< (((()))))')
            setNewsTemp(data.data)
            setDataNews(data.data)
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERROR RESPONS ><><><>><><')
        })
    }

    console.log(props.location.search , ' <<<< LOCATION >>>')

    return (
        <div className="content-container-12">
            {
                props.location.search === "" ?
                <ContentList 
                    {...props} 
                    dataNews={dataNews} 
                    NewsTemp={NewsTemp}
                    setNewsTemp={setNewsTemp}
                    setDataNews={setDataNews}
                />  
                :  
                <ContentDetail {...props} dataNews={dataNews} getData={getData} NewsTemp={NewsTemp}/>
            }
        </div>
    )

}

export default ContentContainer