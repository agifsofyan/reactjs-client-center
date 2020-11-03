import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ProductList,
  RegisterPage,
  LoginPage,
} from './Pages';

import Footer from './Components/ProductList/Footer';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={ProductList} exact />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/footer" component={Footer} />
    </Switch>
  );
};

export default App;
