import React , { useEffect , useState }  from 'react'

// MODULE
import { Switch, Route   } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux'

// PAGES
import { 
        Auth , 
        // Home , 
        ProductList , 
        ChangePass , 
        ResetPass , 
        ProductDetail , 
        Error404 ,  
        CartContainer , 
        CheckOut  ,
        TransferConfirm,
        PaymentSuccess,
        ScrollToTop,
        LandingPage
      } from './Pages'

// COMPONENT 
import Navbar from './Components/Navbar'
import Modal from './Components/Modal'
import Advertisement from './Components/Advertisement'

// GLOBAL ACTION
import { changeValue , changeValueUser } from './Redux/Actions/index'

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
  // const [topScroll,setTopScroll] = useState(0)

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
          data.data.forEach((e,index)=>{
            // if (e.type === 'ecommerce') {
            //   console.log(e.name , ' <<<<><><')
            // }
            if (!e.price || !e.sale_price) {
              console.log(e.price , ' <<<< PRICE')
              console.log(e.sale_price , ' <<< SALE PRICE')
            }
            if (e.feature.active_header || e.feature.active_page) {
              dispatch(changeValue("productHeader",e))
            }
          })
          console.log(data.data , ' <<<<< DATA PRODUCT')
          dispatch(changeValue("productList",data.data))
      })
      .catch(err=>{
          console.log(err , ' <<< ERROR')
      })
      
      // GET USERS
      // axios({
      //   method : "GET",
      //   url : `${SWAGGER_URL}/users/me`,
      //   headers : {
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
      //     // "x-auth-token" : localStorage.getItem('token')
      //   }
      // })
      // .then((data)=>{
      //   console.log(data , ' <<<< FIX >>>> OKOKOKOK')
      // })
      // .catch(err=>{
      //   console.log(err.response)
      // })

  },[dispatch])

  // HANDLE SCROLL
  let handleAll = (e) => {
    // setTopScroll(document.body.scrollTop)
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation();
    dispatch(changeValueUser('top',document.body.scrollTop))
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
        <ScrollToTop>
          <Switch>
            <Route path="/auth" component={Auth}/>
            <Route path="/product-list" component={ProductList}/>
            <Route path="/change-password"component={ChangePass}/>
            <Route path="/forget-password" component={ResetPass}/>
            <Route path="/check-out" component={CheckOut}/>
            <Route 
              path="/product-detail/:slug" 
              component={ProductDetail}
              // component={()=><ProductDetail topScroll={topScroll} />}
            />
            <Route 
              path="/cart" 
              component={CartContainer}
              // component={()=>localStorage.getItem('token') ? <Card/> : <CardNotLoggedIn/>}
            />
            <Route path="/transfer-confirm" component={TransferConfirm}/>
            <Route path="/payment=true" component={PaymentSuccess}/>
            <Route path="/landing-page" component={LandingPage}/>
            {/* <Route path="/" exact component={Home}/> */}
            <Route path="/" exact component={ProductList}/>
            <Route path="" component={Error404}/>
          </Switch>
        </ScrollToTop>
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