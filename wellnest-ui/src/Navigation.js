import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './WebSite/Views/Homepage/Homepage';
import Covid from './WebSite/Views/covid19/App-1';
import Contact from './WebSite/Views/Contact/Contact';
import SickInfo from './WebSite/Views/Homepage/SickInfo'
import Admin from './WebSite/Views/Admin-pannel/adminpannel';
import Form from './WebSite/Views/Register-Form(Login)/Form';
import Add_S from './WebSite/Views/Admin-pannel/Add-S';
import MainPage from './WebApplication/Views/MainPage';
import Add_D from './WebSite/Views/Admin-pannel/add-d';
import Allergie from './WebApplication/Allergy/Allergie'
import Disease from './WebApplication/Diseases/diseases';
import Analysis from './WebApplication/Analyses/Analysis';
import RecoveredPatients from './WebApplication/Views/RecoveredPatientUI/RecoveredPatients'
import CovidStatus from './WebApplication/CovidStatus/covid-status'
import Diagnose from './WebApplication/Diagnose/Diagnose';
import Profile from './WebApplication/Profile/Profile';
import Vaccination from './WebApplication/Vaccination/Vaccination'; 
import analysisAppointment from './WebApplication/AnalysisAppointment/analysisAppointment'
import RecPatientTable from './WebApplication/Views/RecoveredPatientUI/RecPatientTable'
import BookAppointment from './WebApplication/BookAppointment/BookAppointment';

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path='/sickinfo' component={SickInfo}/>
        <Route path='/' exact component={Homepage}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/covid' component={Covid}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/form' component={Form}/>
        <Route path='/add_s' component={Add_S}/>
        <Route path='/add-d' component={Add_D}/>
        <Route path ='/mainpage' component={MainPage}/>
        <Route path ='/allergy' component={Allergie}/>
        <Route path ='/disease' component={Disease}/>
        <Route path ='/recoveredpatients' component={RecoveredPatients}/>
        <Route path='/Analysis' component={Analysis}/>
        <Route path='/AnalysisAppointment' component={analysisAppointment}/>
        <Route path ='/covidstatus' component={CovidStatus}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/diagnose' component={Diagnose}/>
        <Route path='/vaccination' component={Vaccination}/>
        <Route path ='/recpatienttable' component ={RecPatientTable}/>
        <Route path='/bookappointment' component={BookAppointment}/>


      </Switch>
    
    </Router>
  )
}
