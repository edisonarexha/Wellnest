import React, {useEffect, useState} from "react";
import{
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent
}from "@material-ui/core";
import InfoBox from './InfoBox';
import LineGraph from "./LineGraph";
//import Mapp from "./Map"
import Table from "./Table";
import "./App.css";
import { sortData } from "./util";
import "leaflet/dist/leaflet.css";
import Covid19Table from './Covid19Table';


function App() {
const[countries,setCountries] = useState([]);
const[country, setCountry]=useState('WorldWide');
const [countryInfo,setCountryInfo] = useState({});
const[tableData,setTableData] = useState([]);
const [casesType, setCasesType] = useState("cases");


//world wide
useEffect(() => {
  fetch("https://disease.sh/v3/covid-19/all")
  .then(response => response.json())
  .then(data => {
    setCountryInfo(data);
  })
},
[])


useEffect(()=>{
const getCountriesData= async() => {
  await fetch ("https://disease.sh/v3/covid-19/countries")
  .then((response)=>response.json())
  .then((data) => {
   // [item1,item2,item3]
   //item 1 =?> retyu\\urning an object 
   //map eshte ndryshe prej for each,tash e shkruj shka i bjen

    const countries = data.map((country) => (
      {
        name:country.country,//United states, United Kingdom, kosoov
        value:country.countryInfo.iso2//USA,UK,KOS,ALB
      }));
      const sortedData=sortData(data);
      setTableData(sortedData);
      setCountries(countries);
  });
};
getCountriesData();
},[]);
//what is async =?>async is a piece of code that is 
const onCountryChange = async(event) => {
  const countryCode = event.target.value;
  //console.log('Hello>>>',countryCode);
  setCountry(countryCode);
  const url = countryCode ==='WorldWide' ? 'https://disease.sh/v3/covid-19/all' : 
  `https://disease.sh/v3/covid-19/countries/${countryCode}`
  //
  //https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]
  await fetch(url) 
  .then(response => response.json())
  .then(data =>{
    setCountry(countryCode);
    setCountryInfo(data);//store repsonse to variable
  })
};
console.log('CountryINFO>>>>>>>',countryInfo);

//pull information from disease
  return (
    <div className="App">
      <div className="app__left">
      <div className="app__header">
    <h1>COVID-19 TRACKER</h1>
     <FormControl className="app__dropdown">
       <Select variant="outlined" onChange={onCountryChange} value={country}>
             <MenuItem value="WorldWide">Worldwide</MenuItem>
        {countries.map(country=>(
             <MenuItem value={country.value}>{country.name}</MenuItem>
           ))}
       </Select>
     </FormControl>
     </div>
         <div className="app__stats">
            {/*InfoBoxes title="corona virus cases" */}

            <InfoBox 
                isRed
                active={casesType==='cases'}
                onClick={(e)=>setCasesType("cases")}            
            title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>

            {/*InfoBoxes title = "coronavirus recoveries"*/}
            
            <InfoBox 
                active={casesType==='recovered'}
                onClick={(e)=>setCasesType("recovered")}  
            title="Coronavirus Recoveries" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
            
            {/*InfoBoxes */}
            
            <InfoBox 
            isRed
               active={casesType==='deaths'}
               onClick={(e)=>setCasesType("deaths")}  
            title="Coronavirus deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
         </div>
          
          <Covid19Table>
            
          </Covid19Table>
          
    
      
      
  
    </div>
    <Card className="app__right">
      <CardContent>
        <h3>Live Cases by Country</h3>
        
          <Table countries={tableData}/>
        <h3>WorldWide new {casesType}</h3>
        
           <LineGraph casesType={casesType} />
      </CardContent>
     
        </Card>
    </div>
  );
}

export default App;
