import React from 'react';
// import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import {
  ProductList,
  ProductDetail,
  Auth,
  Cart,
} from './Pages';
// import { keepLogin } from './Redux/Actions/UserAction';

const App = () => {
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //       dispatch(keepLogin(token));
  //   }
  // }, [dispatch]);

  return (
    <Switch>
      <Route path="/" component={ProductList} exact />
      <Route path="/product-detail" component={ProductDetail} />
      <Route path='/auth' component={Auth} />
      <Route path='/cart' component={Cart} />
    </Switch>
  );
};

export default App;
