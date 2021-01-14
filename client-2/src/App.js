import React , { useEffect , useState }  from 'react'

// MODULE
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux'

// PAGES
import { Auth , Home , ProductList , ChangePass , ResetPass , ProductDetail , Card  } from './Pages'

// COMPONENT 
import Navbar from './Components/Navbar'
import Modal from './Components/Modal'
import Advertisement from './Components/Advertisement'

// GLOBAL ACTION
import { changeValue } from './Redux/Actions/productAction'

// API
import {  SWAGGER_URL } from './Support/API_URL'

// STYLE
import './index.css'

function App () {

  // USE DISPATCH
  const dispatch = useDispatch()

  // LOCAL STATE
  const [showModal,setShowModal] = useState(false)
  const [modalClose,setModalClose] = useState(false)
  const [showAdv,setShowAdv] = useState(true)
  const [topScroll,setTopScroll] = useState(0)

  // USE EFFECT
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
          console.log(data.data , ' <<<< DATA >>>>')
      })
      .catch(err=>{
          console.log(err , ' <<< ERROR')
      })

  },[dispatch])

  // HANDLE SCROLL
  let handleAll = (e) => {
    setTopScroll(document.body.scrollTop)
  }

  return (
    <div
      className="root-container" 
      id="master-root"
      onWheel={e=>handleAll(e)} 
    >
      <div onScroll={e=>console.log('HMMMM')} className="root-content">
        <Navbar
          setShowModal={setShowModal}
        />
        {
          showAdv &&
          <Advertisement
            setShowAdv={setShowAdv}
          />
        }
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/product-list" component={ProductList}/>
          <Route path="/change-password"component={ChangePass}/>
          <Route path="/forget-password" component={ResetPass}/>
          <Route 
            path="/product-detail/:id" 
            // component={ProductDetail}
            component={()=><ProductDetail topScroll={topScroll} />}
          />
          <Route path="/card" component={Card}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
      {
        showModal &&
        <Modal
          modalClose={modalClose}
          setModalClose={setModalClose}
          setShowModal={setShowModal}
        />
      }
    </div>
  )

}

export default App