
import './App.css';
import HomeComponent from "./homeComponent";
import ProductComponent from './productComponent';
import CategoryComponent from './categoryComponent';
import UserFormComponent from './userFormComponent';
import CategoryFormComponent from './categoryFormComponent';
import NavBarComponent from './navComponent'
import ProductFormComponent from './productFormComponent';
import FilterComponent from './filterComponent';
import ShoppingComponent from './shoppingComponent';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBarComponent/>
      {/* <ShoppingComponent/> */}
      {/* <FilterComponent/> */}
      <Router>
        <Switch>
          <Route path ="/home">
            <HomeComponent/>
          </Route>
          <Route path ="/products">
            <ProductComponent/>
          </Route>
          <Route path ="/category">
            <CategoryComponent/>
          </Route>
          <Route path="/user-form">
          <UserFormComponent/>
          </Route>
          <Route path = "/category-form">
          <CategoryFormComponent/>
          </Route>
          <Route path = "/product-form">
          <ProductFormComponent/>
          </Route>
          <Route path = "/filter-form">
          <FilterComponent/>
          </Route>
          <Route path = "/shopping">
          <ShoppingComponent/>
          </Route>
        </Switch>
      </Router>
    
    </React.Fragment>
  
  )
}

export default App;
