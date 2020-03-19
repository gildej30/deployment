import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Router } from '@reach/router'; 
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';
import Details from './views/Details';

//remember to import axios and  @react/router for {Link}

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
          <Main path='/' />
          <NewAuthor path='/author/new' />
          <EditAuthor path='/author/:id/edit' />
          <Details path='/author/:id' />
      </Router>
    </div>
  );
}

export default App;
