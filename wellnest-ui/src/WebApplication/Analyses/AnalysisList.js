import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

export const AnalysisList = () => {
  const [analysis, setAnalysis] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/analysis")
      .then((response) => response.json())
      .then((data) => {
        setAnalysis(data);
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
            <p>Results</p>
            <p>Date</p>
          </div>

          {analysis.map((analysis) => (
            <div id="label-modal-div2">
                <p>{analysis.Id}</p>
              <p id="p-textarea1">{analysis.Name}</p>
              <p>{analysis.Results}</p>
              <p>{analysis.date.substring(0, 10)}</p>
            </div>
          ))}
        </Form.Field>
      </Form>
    </div>
  );
};