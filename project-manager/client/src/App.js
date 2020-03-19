import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';

import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import EditProduct from './views/EditProduct';


function App() {
  return (
    <div className="App">
      <Paper elevation={3}><p>Some Paper Here</p></Paper>
      <h1>Product Info:</h1>
      <Router>
        <Main path="/" />
        <ProductDetails path="/product/:id" />
        <EditProduct path="/product/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
