import React , { useState , useEffect } from 'react'

// MODULE
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'

// COMPONENT
import { Title , Search , Content } from '../Components/Home'

// GLOBAL ACTION
import { changeValue } from '../Redux/Actions/productAction'

// API
import {  SWAGGER_URL } from '../Support/API_URL'

function Home () {

    // LOCAL STATE
    const [selectedTab,setSelectedTab] = useState(0)

    // GLOBAL STATE
    const productList = useSelector(state=>state.product.productList)
    const topicList = useSelector(state=>state.product.topicList)

    // CALL DISPATCH
    const dispatch = useDispatch()

    useEffect(()=>{

        // GET TOPICS
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/topics`
        })
        .then(({data})=>{
            dispatch(changeValue("topicList",data.data))
           
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })

        // GET PRODUCTS
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/products`
        })
        .then(({data})=>{
            dispatch(changeValue("productList",data.data))
            
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })

    },[dispatch])

    useEffect(()=>{
        if (productList && topicList) {
            let dataProduct = productList
            let first = topicList[selectedTab]._id
            let result = []
            dataProduct.forEach(e=>{
                let status = false
                e.topic.forEach(e2=>{
                    if (e2._id === first && !status  ) {
                        result.push(e)
                        status = true
                    }
                })
            })
            dispatch(changeValue("productFilter",result))
        }
    },[productList,topicList,selectedTab,dispatch])

    return (
        <div
            style={styles.root}
        >
            <Title/>
            <Search/>
            <Content
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
        </div>
    )

}

const styles = {
    root : {
        display : "flex" , 
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
        width : "100%",
        height : "100%",
    }
}

export default Home