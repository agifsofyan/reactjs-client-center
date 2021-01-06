import React  from 'react'
import { Switch, Route } from 'react-router-dom';

// PAGES
import { Auth , Home , ProductList } from './Pages'

// COMPONENT 
import Navbar from './Components/Navbar'

// STYLE
import './index.css'

function App () {

  // const [showModal,setShowModal] = useState(false)

  return (
    <div className="root-container">
      <div className="root-content">
        <Navbar
        />
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/product-list" component={ProductList}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
      {/* {
        showModal &&
        <div className="burger-menu-01">
          <div className="burger-menu-01-content">

          </div>
        </div>
      } */}
      {/* <div className="burger-menu-01">
        <div className="burger-menu-01-content">

        </div>
      </div> */}
    </div>
  )

}

export default App