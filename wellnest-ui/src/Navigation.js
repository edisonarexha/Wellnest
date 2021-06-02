import React from 'react';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './Views/Homepage/Homepage';
import Covid from './Views/covid19/App-1';
import Contact from './Views/Contact/Contact';


export default function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/contact'exact component={Contact}/>
        <Route path='/covid'exact component={Covid}/>
      </Switch>
    
    </BrowserRouter>
  )
}
