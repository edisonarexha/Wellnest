import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

export const TestedList = () => {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/CovidStatus")
      .then((response) => response.json())
      .then((data) => {
        setStatus(data);
        console.log(data);
      });
  }, []);
 
  return (
    <div>
      <Form>
        <Form.Field>
          <div id="label-modal-div1">
            <p>ID</p>
            <p>Status</p>
            <p>Test Date</p>
          </div>

          {status.map((CovidStatus) => (
             
            <div id="label-modal-div2">
                <p>{CovidStatus.Id}</p>
              <p id="p-textarea1">{CovidStatus.Status.substring(0, 10)}</p>
              <p>{CovidStatus.Date}</p>
            </div>
          ))}
        </Form.Field>
      </Form>
    </div>
  );
};
