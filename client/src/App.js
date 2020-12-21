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
  BankSuccess,
} from './Pages';
// testing area
import Test from './Pages/Test';

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
      <Route path='/blog' component={Blog} />
      <Route path='/cart' component={Cart} />
      <Route path='/test' component={Test} />
      {
        loggedIn
        ?
        <>
          <Route path='/profile' component={Profile} />
          <Route path='/payment' component={Payment} />
          <Route path='/failed' component={PayFailed} />
          <Route path='/success' component={PaySuccess} />
          <Route path='/bank-success' component={BankSuccess} />
        </>
        :
        null
      }
    </Switch>
  );
};

export default App;
