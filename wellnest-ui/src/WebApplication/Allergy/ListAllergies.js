import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

const ListAllergies = () => {
  const [allergies, setAllergies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/allergie")
      .then((response) => response.json())
      .then((data) => {
        setAllergies(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Form>
        <Form.Field>
          <div id="label-modal-div1">
            <p>ID</p>
            <p>Name</p>
            <p>Reason</p>
          </div>

          {allergies.map((allergy) => (
            <div id="label-modal-div2" key={allergy.AllergyId}>
              <p>{allergy.AllergyId}</p>
              <p>{allergy.Name}</p>
              <p id="p-textarea1">{allergy.Reason}</p>
            </div>
          ))}
        </Form.Field>
      </Form>
    </div>
  );
};
export default ListAllergies;
