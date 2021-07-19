import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

export const ListDiagnoses = () => {
  const [diagnoses, setDiagnoses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/diagnose")
      .then((response) => response.json())
      .then((data) => {
        setDiagnoses(data);
        console.log(data);
      });
  }, []);
 
  return (
    <div>
      <Form>
        <Form.Field>
          <div id="label-modal-div1">
            <p>ID</p>
            <p>Date</p>
            <p>Pills</p>
          </div>

          {diagnoses.map((diagnose) => (
             
            <div id="label-modal-div2" key={diagnose.DiagnoseId}>
                <p>{diagnose.DiagnoseId}</p>
              <p id="p-textarea1">{diagnose.Date.substring(0, 10)}</p>
              <p>{diagnose.Pills}</p>
            </div>
          ))}
        </Form.Field>
      </Form>
    </div>
  );
};
