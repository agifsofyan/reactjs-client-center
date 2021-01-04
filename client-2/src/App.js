import React from 'react'
import { Switch, Route } from 'react-router-dom';

// PAGES
import { Auth , Home } from './Pages'

// COMPONENT 
import Navbar from './Components/Navbar'

// STYLE
import './index.css'

function App () {

  return (
    <div className="root-container">
      <div className="root-content">
        <Navbar/>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </div>
  )

}

export default App