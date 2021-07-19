import React, { useEffect, useState } from "react";
import './BookAppTable.css';



import { Button, Modal, Form } from "semantic-ui-react";

export const BookList = () => {
    const [BookAppointment, setBookAppointment] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/BookAppointment")
            .then((response) => response.json())
            .then((data) => {
                setBookAppointment(data);
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
                  
                   <th className="OAP">Number</th>
                   <th className="OAP">Email</th>
                   <th className="OAP">Appointment Date</th>
                   <th className="OAP">Comment</th>
               </tr>
                {BookAppointment.map(rec => (
                   <tr>    
                       <th>{rec.Id}</th>
                       <th >{rec.FirstName}</th>
                       <th>{rec.SecondName}</th>
                       <th>{rec.Number}</th>
                       <th>{rec.Email }</th>
                       <th>{rec.AppointmentDate}</th>
                       <th>{rec.Comment}</th>
                   </tr>

               )   )} 

           </table>
           </div>
    </div>
  );
};
export default BookList;