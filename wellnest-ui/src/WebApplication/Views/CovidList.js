import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

export const CovidList = () => {

        const[covid19,setCovid19]=useState([]);
    
        useEffect(() => {
            fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
              .then((response) => response.json())
              .then((data) => {
        
                setCovid19(data);
                console.log(data)
              });
          }, []);
  return (
    <div>
              {covid19.map(cov=>(  <ul>
                    
                    <li className="covidlist">Covid-19 Cases : {cov.cases}</li>
                    <li className="covidlist">Covid-19 Recoveries: {cov.recoveries}</li>
                    <li className="covidlist">Covid-19 Deaths: {cov.deaths}</li>
              
                    </ul>
                   ))}
    </div>
  );
};
