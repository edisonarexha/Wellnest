import React, { useEffect, useState } from "react";
import './covidcs.css';
import CovidInfectedTable from "./CovidInfectedTable";


export const CovidInfectedList = () => {
    const [CovidInfected, setCovidInfected] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/CovidInfected")
            .then((response) => response.json())
            .then((data) => {
                setCovidInfected(data);
                console.log(data);
            });
    }, []);
 
  return (
    <div>
          <div className="mainid">
           
           <table className="table11">
               <tr>
                   <th className="OAP">Register ID</th>
                   <th className="OAP">Firstname</th>
                   <th className="OAP">Secondname</th>
                  
                   <th className="OAP">City</th>
                   <th className="OAP">State</th>
                   <th className="OAP">Age</th>
                   <th className="OAP">Family Members</th>
               </tr>
                {CovidInfected.map(rec => (
                   <tr>    
                       <th>{rec.Id}</th>
                       <th >{rec.CovidName}</th>
                       <th>{rec.CovidSurname}</th>
                       <th>{rec.City}</th>
                       <th>{rec.State }</th>
                       <th>{rec.Age}</th>
                       <th>{rec.FamilyMembers}</th>
                   </tr>

               )   )} 

           </table>
           </div>
    </div>
  );
};
export default CovidInfectedList;