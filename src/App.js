import React , { useEffect , useState }  from 'react'

// MODULE
import { Switch, Route, useLocation } from 'react-router-dom';
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'

// PAGES
import { 
        Auth , 
        Home , 
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
        LandingPage,
        OrderHistory,
        TopicList,
        AboutUs,
        Privacy,
        Terms,
        DanaNotif,
        DanaFinish,
        ContentContainer,
        PaymentSuccess2,
        PaymentFailed,
        CallbackDana,
        Faq,
        Career,
        Subscribe,
        ProfileUpdate
      } from './Pages'

      import { 
        Dashboard, 
        LMSHome, 
        LMSWebinar, 
        LMSVideoList, 
        LMSVideoDetail, 
        LMSTipsList, 
        LMSTipsDetail, 
        LMSModule, 
        LMSGroup, 
        LMSBonus, 
        LMSReseller, 
        LMSResellerMe, 
        LMSProfile, 
      } from './LMS-Pages';

import AnswerModule from './LMS-Pages/Module/answerModule';

// COMPONENT 
import Navbar from './Components/Navbar'
import Drawer from './Components/Modal'
import Advertisement from './Components/Advertisement/index'

// GLOBAL ACTION
import { changeValue , changeValueUser , getPaidList } from './Redux/Actions/index'
import { setDataSetting ,getUserWhoAmI , getUserStory , getUserLMS  } from './Redux/Actions/userAction'

// API
import { SWAGGER_URL } from './Support/API_URL'

// STYLE
import './index.css'

function App () {

  // USE LOCATION
  const location = useLocation()

  // USE DISPATCH
  const dispatch = useDispatch()

  // GLOGAL STATE
  const productHeader = useSelector(state=>state.product.productHeader)
  const setting = useSelector(state=>state.user.settingData)
  const userInfo = useSelector(({ user }) => user.userMe);

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
            if (!e.price || !e.sale_price) {
              console.log(e.price , ' <<<< PRICE')
              console.log(e.sale_price , ' <<< SALE PRICE')
            }
            if (e.feature) {
              if (e.feature.active_header || e.feature.active_page) {
                console.log(e._id , ' <<< ID')
                dispatch(changeValue("productHeader",e))
              }
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
      dispatch(setDataSetting())
      dispatch(getPaidList());
      dispatch(getUserWhoAmI());
      dispatch(getUserStory())
      dispatch(getUserLMS( {trending : true,favorite : false} ))

  },[dispatch])

  useEffect(()=>{
    console.log('VALUE USER INFO HERE !!!!!^^^^^^^^^^^^^^^^^')
  },[userInfo])

  // HANDLE SCROLL
  let handleAll = (e) => {
    // setTopScroll(document.body.scrollTop)
    e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation();
    dispatch(changeValueUser('top',document.body.scrollTop))
  }

  let handleSiteRoute = () => {
    let params = location.pathname
    let res = params.split('').filter((e,i)=> i > 0)
    let arrP = res.join('').split('-')
    let strR = ""

    for (let i in arrP) {
      let e = arrP[i]
      for (let j in e) {
        let e2 = e[j]
        if ( j === "0") {
          // console.log('HERE jfdjfnjsdfnsjdfndsjfn')
          strR += e2.toUpperCase()
        }else if (e2 === "/") {
          strR += " | "
        }
        else {
          strR += e2
        }
      }
      strR += " "
    }
    return strR
  }

  useEffect(()=>{
    if (location.pathname!== "/") {
      document.title = (setting ? (setting.site_title.value + " | ") : "") + handleSiteRoute() 
    } else {
      document.title = `${setting ? (setting.site_title.value + " | ") : ""}#1 Gamification-Based Education in Indonesia`
    }
  },[location,setting])
 
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
          showAdv && productHeader &&
          <Advertisement
            setShowAdv={setShowAdv}
          />
        }
        <ScrollToTop>
          <Switch>
            <Route path="/auth" component={Auth}/>
            <Route path="/register" component={Auth}/>
            <Route path="/login" component={Auth}/>
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
            <Route path="/order-history" component={OrderHistory}/>
            <Route path="/landing-page" component={LandingPage}/>
            <Route path="/topic-list" component={TopicList}/>
            <Route path="/about-us" component={AboutUs}/>
            <Route path="/privacy-policy" component={Privacy}/>
            <Route path="/terms-and-condition" component={Terms}/>
            <Route path="/faq" component={Faq}/>
            <Route path="/blog" component={ContentContainer}/>
            <Route path="/career" component={Career}/>
            <Route path="/subscribe" component={Subscribe}/>
            <Route path="/profile-update" component={ProfileUpdate}/>
            {/* <Route path="/blog" component={ContentList}/> */}
            {/* DANA */}
            <Route path="/payments/notification" component={PaymentSuccess2}/>
            <Route path="/payments/finish" component={DanaFinish}/>
            <Route path="/payments/failed" component={PaymentFailed}/>
            <Route path="/payments/callback" component={CallbackDana}/>
            {/* LMS PAGE  */}
            <Route path='/lms-dashboard' component={Dashboard} />
            <Route path='/lms-home' component={LMSHome} />
            <Route path='/lms-webinar' component={LMSWebinar} />
            <Route path='/lms-video-list' component={LMSVideoList} />
            <Route path='/lms-video-detail' component={LMSVideoDetail} />
            <Route path='/lms-tips-list' component={LMSTipsList} />
            <Route path='/lms-tips-detail' component={LMSTipsDetail} />
            <Route path='/lms-module-answer' component={AnswerModule} />
            <Route path='/lms-module' component={LMSModule} />
            <Route path='/lms-group' component={LMSGroup} />
            <Route path='/lms-bonus' component={LMSBonus} />
            <Route path='/lms-reseller' component={LMSReseller} />
            <Route path='/lms-reseller-me' component={LMSResellerMe} />
            <Route path='/lms-profile' component={LMSProfile} />
            <Route path="/home" exact component={Home}/>
            <Route path="/" exact component={LandingPage}/>
            <Route path="" component={Error404}/>
          </Switch>
        </ScrollToTop>
      </div>
      {
        showModal &&
        <Drawer
          modalClose={modalClose}
          setModalClose={setModalClose}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      }
    </div>
  )

}

export default App