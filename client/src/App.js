import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ProductList,
  ProductDetail,
  Auth,
  Cart,
  Payment,
  PaySuccess,
  PayFailed,
} from './Pages';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={ProductList} exact />
      <Route path="/product-detail" component={ProductDetail} />
      <Route path='/auth' component={Auth} />
      <Route path='/cart' component={Cart} />
      <Route path='/payment' component={Payment} />
      <Route path='/success' component={PaySuccess} />
      <Route path='/failed' component={PayFailed} />
    </Switch>
  );
};

export default App;
