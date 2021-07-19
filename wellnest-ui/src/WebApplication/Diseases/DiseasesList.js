import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

export const DiseasesList = () => {
  const [diseases, setDisease] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/DiseasesP")
      .then((response) => response.json())
      .then((data) => {
        setDisease(data);
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
            <p>Information</p>
          </div>

          {diseases.map((DiseasesP) => (
             
            <div id="label-modal-div2">
                <p>{DiseasesP.Id}</p>
              <p id="p-textarea1">{DiseasesP.Name.substring(0, 10)}</p>
              <p>{DiseasesP.Information}</p>
            </div>
          ))}
        </Form.Field>
      </Form>
    </div>
  );
};
