import React, { Fragment } from 'react';
import aboutus from "./images/information.png";
import join from "./images/soccer.png";
import school from "./images/school.png";
import trainers from "./images/trainers.png";
import calendar from "./images/calendar.png";
import goalkeeper from "./images/casillas.PNG"
import defender from "./images/kompany.PNG"
import midfield from "./images/guardiola.PNG"
import attacker from "./images/shev.PNG"
import help from "./images/help.png";

import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import CardDeck from 'react-bootstrap/CardDeck'



import Jumbotron from 'react-bootstrap/Jumbotron'
import { ModalBody } from 'react-bootstrap';


function Body(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(       
    <Container>
        <Jumbotron fluid>
            <Container>
                <h1>Go Nuts</h1>
            </Container>
           
        </Jumbotron>

        <Jumbotron fluid>
            <Container>
                <h2>Browse through the biggest selection of fresh nuts in Ottawa!</h2>
                <br></br>
                <br></br>
                <p>We make new batches everyday!</p>
                <br></br>
                <br></br>

            </Container>
            <Button>Browse our selection</Button>
        </Jumbotron>


        <Jumbotron fluid>
            <Container>
            <div class ="p-3 my-3 bg">

              <h1 class=""> <img src={aboutus} alt="" className="icon"/> About us</h1><br></br>
  
              <p class="phrase">We have been proudly serving Canadians for over 30 years.</p> 

              <p class="phrase">Since 1991 all of our customers have been enjoying our daily roasted fresh nuts. </p>
  
              <p class="phrase">We are a locally owned and funded buisness and we will continue to serve our customers to the best of our abilitys.</p>
            </div>
            </Container>
           
        </Jumbotron>

        <div class ="p-3 my-3 bg">
    <h1 class=""> <img src={trainers} alt="" className="icon"/> Our Menu</h1><br></br>

    <CardDeck>
  <Card>
    <Card.Img variant="top" src={goalkeeper}/>
    <Card.Body>
      <Card.Title>Piss taschois</Card.Title>
      <Card.Text>
      Iker Casillas is an experienced goalkeeper coach who has helped several young goalkeepers go pro.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={defender}/>
    <Card.Body>
      <Card.Title>Vincent Kompany</Card.Title>
      <Card.Text>
      Vincent Kompany is an experienced defender coach who has helped several young defenders go pro.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={midfield}/>
    <Card.Body>
      <Card.Title>Pep Guardiola</Card.Title>
      <Card.Text>
      Pep Guardiola is an experienced midfielder coach who has helped several young midfielders go pro.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={attacker}/>
    <Card.Body>
      <Card.Title>Andriy Shevchenko</Card.Title>
      <Card.Text>
      Andriy Shevchenko is an experience forward coach who has helped several young forwards go pro.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>    

    


  

    <div class ="p-3 my-3 bg">
    <h1 class=""> <img src={join} alt="" className="icon"/> Join the Academy</h1><br></br>
    <Form>
<Form.Group controlId="name">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="name" placeholder="Full Name" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
  </Form.Group>
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Age</Form.Label>
    <Form.Control as="select">
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Soccer position</Form.Label>
    <Form.Control as="select" multiple>
      <option>Goalkeeper</option>
      <option>Defender</option>
      <option>Midfielder</option>
      <option>Forward</option>
    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlSelect3">
    <Form.Label>Years of experience</Form.Label>
    <Form.Control as="select" multiple>
      <option>0-1</option>
      <option>2-3</option>
      <option>3-4</option>
      <option>5+</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
</div>

<div class ="p-3 my-3 bg">
    <h1 class=""> <img src={school} alt="" className="icon"/> Courses</h1><br></br>
    <>
    <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
      <Button variant="primary" onClick={handleShow}>
        GoalKeeper training
      </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GoalKeeper training</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    <><Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
      <Button variant="primary" onClick={handleShow}>
        Defense training
      </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Defense training</Modal.Title>
        </Modal.Header>
        <Modal.Body>Defense</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <><Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
      <Button variant="primary" onClick={handleShow}>
        Midfield training
      </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Midfield training</Modal.Title>
        </Modal.Header>
        <Modal.Body>Midfield</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <><Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
      <Button variant="primary" onClick={handleShow}>
        Forward training
      </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forward training</Modal.Title>
        </Modal.Header>
        <Modal.Body>Forward</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

</div>    



<div class ="p-3 my-3 bg">
    <h1 class=""> <img src={calendar} alt="" className="icon"/> Book a Training Session</h1><br></br>
    


</div>


<div class ="p-3 my-3 bg">
    <h1 class=""> <img src={help} alt="" className="icon"/> Help</h1><br></br>
    


</div>        
</Container>
    );
}

export default Body;
