import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { keepLogin } from './Redux/Actions/UserAction';
import {
  ProductList,
  ProductDetail,
  Auth,
  Profile,
  Cart,
  Payment,
  PaySuccess,
  PayFailed,
  Blog,
} from './Pages';
import RenderingOnly from './Pages/RenderingOnly';

const token = localStorage.getItem('token');

const App = () => {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    if (token) {
      dispatch(keepLogin(token));
    }
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/" component={ProductList} exact />
      <Route path="/product-detail" component={ProductDetail} />
      <Route path='/auth' component={Auth} />
      {
        loggedIn
        ?
        <Route path='/profile' component={Profile} />
        :
        null
      }
      <Route path='/cart' component={Cart} />
      <Route path='/payment' component={Payment} />
      <Route path='/success' component={PaySuccess} />
      <Route path='/failed' component={PayFailed} />
      <Route path='/blog' component={Blog} />
      {/* TESTING PART */}
      <Route path='/render' component={RenderingOnly} />
    </Switch>
  );
};

export default App;
