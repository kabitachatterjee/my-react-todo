// src/config/routes.js
import React from 'react';
import {Route} from 'react-router';
import App from '../App';
import TodosContainer from '../container/TodosContainer';

export default (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer}/>
  </Route>
)
