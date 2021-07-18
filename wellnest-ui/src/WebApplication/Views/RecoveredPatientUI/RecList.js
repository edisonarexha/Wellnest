import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

export const RecList = () => {
    const [RecoveredPatients, setRecoveredPatinent] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/RecoveredPatiensCovid19")
            .then((response) => response.json())
            .then((data) => {
                setRecoveredPatinent(data);
                console.log(data);
            });
    }, []);
 
  return (
    <div>
          <div className="mainid">
           
           <table className="table1">
               <tr>
                   <th className="OAP">Register ID</th>
                   <th className="OAP">Firstname</th>
                   <th className="OAP">Lastname</th>
                   <th className="OAP">City</th>
                   <th className="OAP">Number</th>
                   <th className="OAP">Age</th>
                   <th className="OAP">Infected Date</th>
                   <th className="OAP">Recovered Date</th>
                   <th className="OAP"> Terminated Days</th>
                   <th className="OAP">Quarantined Place</th>
                   <th className="OAP">Vaccine Taken</th>
               </tr>
                {RecoveredPatients.map(rec => (
                   <tr>    
                       <th>{rec.Id}</th>
                       <th >{rec.FirstName}</th>
                       <th>{rec.LastName}</th>
                       <th>{rec.City}</th>
                       <th>{rec.Number}</th>
                       <th>{rec.Age}</th>
                       <th>{rec.Infected}</th>
                       <th>{rec.Recovered}</th>
                       <th>{rec.SickDays}</th>
                       <th>{rec.QuarantinedPlacee}</th>
                       <th>{rec.VaccienName}</th>
                   </tr>

               )   )} 

           </table>
           </div>
    </div>
  );
};
