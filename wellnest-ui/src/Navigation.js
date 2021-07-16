import React from 'react';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './WebSite/Views/Homepage/Homepage';
import Covid from './WebSite/Views/covid19/App-1';
import Contact from './WebSite/Views/Contact/Contact';
import Profile from './WebSite/Views/Profile/profile';
import SickInfo from './WebSite/Views/Homepage/SickInfo'
import Admin from './WebSite/Views/Admin-pannel/adminpannel';
import Form from './WebSite/Views/Register-Form(Login)/Form';
import Add_S from './WebSite/Views/Admin-pannel/Add-S';
import MainPage from './WebApplication/Views/MainPage';
import Add_D from './WebSite/Views/Admin-pannel/add-d';
import AddLabs from './WebSite/Views/AddLabs/addLabs';
import Analysis from './WebApplication/Analyses/Analysis';
import analysisAppointment from './WebApplication/Views/AnalysisAppointment/analysisAppointment';
import Allergie from './WebApplication/Allergy/Allergie';
import RecoveredPatients from './WebApplication/Views/RecoveredPatientUI/RecoveredPatients';


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
        <Route path='/add-d' component={Add_D}/>
        <Route path='/addLabs' component={AddLabs}/>
        <Route path ='/mainpage' component={MainPage}/>
        <Route path ='/allergy' component={Allergie}/>
        <Route path ='/recoveredpatients' component={RecoveredPatients}/>
        <Route path='/Analysis' component={Analysis}/>
        <Route path='/AnalysisAppointment' component={analysisAppointment}/>
        


      </Switch>
    
    </BrowserRouter>
  )
}
