import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";

export const ListVaccines = () => {
  const [vaccines, setVaccines] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/vaccine")
      .then((response) => response.json())
      .then((data) => {
        setVaccines(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Form.Field>
        <p className="vaccine-title">Vaccines</p>
      </Form.Field>

      <Form.Field>
        <div id="label-modal-div1">
        <p>ID</p>
          <p>Name</p>
          <p>Age</p>
          <p>Date</p>
        </div>
        {vaccines.map((vaccine) => (
          <div id="label-modal-div2" key={vaccine.VaccineId}>
            <p>{vaccine.VaccineId}</p>
            <p>{vaccine.Name}</p>
            <p>{vaccine.Age}</p>
            <p id="p-textarea1">{vaccine.Date_Taken.substring(0, 10)}</p>
          </div>
        ))}
      </Form.Field>
    </div>
  );
};
