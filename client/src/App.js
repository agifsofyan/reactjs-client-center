import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ProductList,
  RegisterPage,
  LoginPage,
} from './Pages';

import Card from './Components/ProductList/Card';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={ProductList} exact />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/card" component={Card} />
    </Switch>
  );
};

export default App;
