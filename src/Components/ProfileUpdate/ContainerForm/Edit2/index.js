import React , { useEffect , useState } from 'react'

// MODULE
import { useSelector , useDispatch } from 'react-redux'
import axios from 'axios'

// REDUX
import { getUserWhoAmI } from '../../../../Redux/Actions/userAction'

// COMPONENT
import Loader from '../../../../Components/Loader'

// SWAGGER API
import { SWAGGER_URL } from '../../../../Support/API_URL'

function Edit2 () {
    
    // USE DISPATCH
    const dispatch = useDispatch()

    // GLOBAL STATE
    const userInfo = useSelector(state => state.user.userMe);
    const topicList = useSelector(state=>state.product.topicList)

    // LOCAL STATE SELECTED TOPIC
    const [selectedTopic,setSelectedTopic] = useState([])

    // LOCAL STATE LOADING
    const [loading,setLoading] = useState(false)

    // CHECK USER INFO
    useEffect(()=>{
        if (userInfo && userInfo.favorite_topics) {
            console.log(userInfo , ' <<< EDIT 2 >>>> 9999')
            if (userInfo.favorite_topics.length > 0) {
                setSelectedTopic(userInfo.favorite_topics)
            }
        }
    },[userInfo])

    // HANLDE TO THE LOCAL STATE
    let handleTopic = (el) => {
        let arr = [...selectedTopic]
        if (selectedTopic.filter(e=>e._id === el._id).length === 0 ) {
            arr.push(el)
        }else {
            arr = arr.filter(e=>e._id !== el._id)
        }
        setSelectedTopic(arr)
    }

    // DATABASE ACTION
    let updateTopic = () => {
        setLoading(true)
        axios({
            method : "PUT",
            url : `${SWAGGER_URL}/users/profile/favorite-topics`,
            data : {
                favorite_topics: selectedTopic
            },
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(({data})=>{
            console.log(data , ' <<<<< SUKSES UPDATE TOPIC')
            dispatch(getUserWhoAmI());
            setLoading(false)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response)
        })
    }

    // RENDER DATA TOPIC 
    let renderTopic = () => {
        return topicList.map((el,index)=>{
            return (
                <div 
                    className={selectedTopic.filter(e=>e._id === el._id).length > 0 ? "select1-active" : "select1" }
                    // className="select1"
                    onClick={e=>handleTopic(el)}
                >
                    {el.name}
                </div>
            )
        })
    }

    return (
        <div className="container">
            <div style={{width : "90%",marginTop : 20,fontSize : 20,fontWeight : 400}}>
                Silahkan Pilih Topik
            </div>
            <div className="select-container">
                {
                    topicList && renderTopic()
                }
            </div>
            <div 
                className="button1"
                onClick={e=>updateTopic(e)}
            >
                {
                    loading ?
                    <Loader/> : "Simpan"
                }
            </div>
        </div>
    )

}

export default Edit2