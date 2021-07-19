import React, { useState, useEffect } from "react";
import "./BookAppointments.css";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import { Grid, Form, Input } from "semantic-ui-react";
const size = ["large"];
const BookAppointment = () => {
  const [RecoveredPatinent, setRecoveredPatinent] = useState([]);
  const [BookAppointment, setBookAppointment] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/RecoveredPatiensCovid19")
      .then((response) => response.json())
      .then((data) => {
        setRecoveredPatinent(data);
        console.log(data);
      });
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setRecoveredPatinent({
      ...RecoveredPatinent,
      [event.target.name]: event.target.value,
    });
  };
  //   const handleCreateActivity =(RecoveredPatinent)=>{
  //     setRecoveredPatinent([...RecoveredPatinent,RecoveredPatinent])
  //   }
  const addNewRecovered = () => {
    fetch("http://localhost:5000/api/RecoveredPatiensCovid19", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(RecoveredPatinent),
    }).then(() => {
      //this.props.refreshList()
    });
  };

  return (
    <div>
       <div className="MainPageHeader">
        <Nav variant="tabs" className="NavBAR">
          <Nav.Item>
            <Nav.Link href="/profile">User Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Consult Doctor</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="Dashboard-left-side">
        <div className="Covid-19-Profile-cases">
          <Tab.Container id="left-tabs-example" defaultActiveKey="Zero">
            <Row>
              <Col sm={8}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link href="/allergy" eventKey="first">
                      Allergies
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/disease" eventKey="second">
                      Diseases
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/vaccination" eventKey="third">
                      Vaccination
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/analysis" eventKey="fourth">
                      Analysis
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/covidstatus" eventKey="fifth">
                      Covid Status
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/bookappointment" eventKey="sixth">
                      Book Appointment
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/recpatienttable" eventKey="seventh">
                      Recovered Patiens
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/diagnose" eventKey="eighth">
                      Diagnoses
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/covid" eventKey="ninth">
                      Covid-19
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Tab.Container>
          <Col sm={15} className="colheight">
            <Tab.Content className="Tabs">
              <Tab.Pane eventKey="sixth">
                <div />
              </Tab.Pane>
              <Tab.Pane eventKey="first">
                <div />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div />
              </Tab.Pane>

              <Tab.Pane eventKey="third">
                <div />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <div />
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <div />
              </Tab.Pane>
              <Tab.Pane eventKey="seventh">
                <div />
              </Tab.Pane>
              <Tab.Pane eventKey="eighth">
                <div />
              </Tab.Pane>
              <Tab.Pane eventKey="ninth">
                <div />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </div>
      </div>
      <Grid columns={1}>
        <Grid.Column className="FirstColumn">
          {size.map((size) => (
            <Form
              onSubmit={addNewRecovered}
              className="FormStyle"
              size={size}
              key={size}
            >
              <h1 className="rec">Book an Appointment</h1>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="First name"
                  placeholder="First name"
                  onChange={handleInputChange}
                  name="FirstName"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                  name="SecondName"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Phone Number"
                  placeholder="Patient Phone Number"
                  onChange={handleInputChange}
                  name="Number"
                />
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Age"
                  placeholder="Patient`s Age"
                  name="Age"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Field
                  widths="equals"
                  id="form-input-control-first-name"
                  control={Input}
                  label="Infected Date"
                  placeholder="YYYY-MM-DD"
                  name="Infected"
                  onChange={handleInputChange}
                ></Form.Field>

                <Form.Field
                  widths="equal"
                  id="form-input-control-first-name"
                  control={Input}
                  label="Covid-Free"
                  placeholder="YYYY-MM-DD"
                  name="Recovered"
                  onChange={handleInputChange}
                ></Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Terminated Days"
                  placeholder="Positive Days"
                  name="SickDays"
                  onChange={handleInputChange}
                />{" "}
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Quarantined At?"
                  placeholder="House/Apartment"
                  name="QuarantinedPlacee"
                  onChange={handleInputChange}
                />{" "}
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Vaccine"
                  placeholder="Which Vaccine Took"
                  name="VaccienName"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <button
                id="form-button-control-public"
                type="submit"
                content="Confirm"
                className="buttoni1"
              >
                Submit
              </button>
            </Form>
          ))}
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default BookAppointment;
