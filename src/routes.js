import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Cart from './components/Cart/Cart';


export default (
  <Switch>
    <Route component={ProductList} exact path='/'/>
    <Route component={Cart} path='/cart' />
    {/* <Route component={} to='/checkout' /> */}
    <Route component={LoginRegister} path='/login' />

  </Switch>
)