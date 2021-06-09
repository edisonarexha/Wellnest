import React from 'react';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './Views/Homepage/Homepage';
import Covid from './Views/covid19/App-1';
import Contact from './Views/Contact/Contact';
import Profile from './Views/Profile/profile';
import SickInfo from './Views/Homepage/SickInfo'
import Admin from './Views/Admin-pannel/adminpannel';
import Form from './Views/Register-Form(Login)/Form';
import Add_S from './Views/Admin-pannel/Add-S';


export default function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/sickinfo' component={SickInfo}/>
        <Route path='/' exact component={Homepage}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/covid' component={Covid}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/form' component={Form}/>
        <Route path='/add_s' component={Add_S}/>

      </Switch>
    
    </BrowserRouter>
  )
}
