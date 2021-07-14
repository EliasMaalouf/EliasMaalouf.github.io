import React, { Fragment } from 'react';
import aboutus from "./images/information.png";
import nut from "./images/nuts.jpg";
import menu from "./images/menu.png";
import pistach from "./images/pistachios.jpg";
import cashew from "./images/cashew.jpg";
import almond from "./images/almond.jpg";
import peanuts from "./images/peanuts.jpg";
import help from "./images/help.png";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { ListGroup } from 'react-bootstrap'; 
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron'



function Body(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(  
          
    <Container>
        <Jumbotron fluid>
            <Container>
                <h1 > <img src={nut} id = "img1" alt="" className="icon"/> Go Nuts</h1>
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
            <a href = "#menu" className="link">Browse our selection{">"}</a>
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

        <div class ="p-3 my-3 bg" id = "menu">
        <Jumbotron fluid>
            <Container>
            <h1 class="" > <img src={menu} alt="" className="icon1"/> Our Menu</h1><br></br>

<CardDeck>
<Card>
<Card.Img variant="top" src={pistach}/>
<Card.Body>
<br></br>
  <Card.Title>Pistachios</Card.Title>
  
  <Card.Text>
  The Pistachio is a memeber of the cashew family, is a small tree originating from Central Asia and the Middle East.
  </Card.Text>
  
</Card.Body>
<Card.Footer>
<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  <Button variant="primary" onClick={handleShow}>
    Order Now!
  </Button>
  <Modal id="md1" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Order Now!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Full Name" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Home address</Form.Label>
          <Form.Control type="adress" placeholder="123 test dr" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
</Card.Footer>
</Card>
<Card>
<Card.Img variant="top" src={cashew}/>
<Card.Body>
  <Card.Title>Cashews</Card.Title>
  <Card.Text>
  The cashew tree (Anacardium occidentale) is a tropical evergreen tree that produces the cashew seed and the cashew apple pseudofruit.
  </Card.Text>
  
</Card.Body>
<Card.Footer>
<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  <Button variant="primary" onClick={handleShow}>
    Order Now!
  </Button>
  <Modal id="md1" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Order Now!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Full Name" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Home address</Form.Label>
          <Form.Control type="adress" placeholder="123 test dr" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
</Card.Footer>
</Card>
<Card>
<Card.Img variant="top" src={almond}/>
<Card.Body>
<br></br>
<br></br>
  <Card.Title>Almonds</Card.Title>
  <Card.Text>
  Almonds are the edible seeds of Prunus dulcis, more commonly called the almond tree.
  </Card.Text>
  
</Card.Body>
<Card.Footer>
<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  <Button variant="primary" onClick={handleShow}>
    Order Now!
  </Button>
  <Modal id="md1" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Order Now!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Full Name" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Home address</Form.Label>
          <Form.Control type="adress" placeholder="123 test dr" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
</Card.Footer>
</Card>
<Card>
<Card.Img variant="top" src={peanuts}/>
<Card.Body>
  <Card.Title>Peanuts</Card.Title>
  <Card.Text>
  The peanut, also known as the groundnut,[2] goober (US),[3] pindar (US)[3] or monkey nut (UK), and taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds.
  </Card.Text>
</Card.Body>
<Card.Footer>
<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  <Button variant="primary" onClick={handleShow}>
    Order Now!
  </Button>
  <Modal id="md1" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Please fill out the required information</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Full Name" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="adress">
          <Form.Label>Home address</Form.Label>
          <Form.Control type="adress" placeholder="123 test dr" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="credit">
          <Form.Label>Credit Card#</Form.Label>
          <Form.Control type="credit" placeholder="XXXX-XXXX-XXXX-XXXX" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Place Order
      </Button>
    </Modal.Footer>
  </Modal>
</Card.Footer>
</Card>
</CardDeck>
            </Container>
           
        </Jumbotron>
    
</div>    

<div class ="p-3 my-3 bg">
<Jumbotron fluid>
            <Container>
            <h1 class=""> <img src={help} alt="" className="icon"/> Help</h1><br></br>
    <h5>Frequently Asked Questions</h5>
    <ListGroup>
    <ListGroup.Item><b>Q: Where is Go Nuts located?</b> <br></br>
                    A: We are located on 4529 HuntClub rd.
    </ListGroup.Item>
    <ListGroup.Item><b>Q: Are the nuts freshly roasted everyday?</b> <br></br>
                    A: YES! We have a new batch of nuts roasted every morning.
    </ListGroup.Item>
    </ListGroup>
    <br></br>
    <h5>Please contact us for any other concerns that have not been answered in the frequently asked questions</h5>
    <ListGroup>
    <ListGroup.Item><b>Phone number</b> <br></br>
    613-258-4155 <br></br>Mon - Sat, 8:00am-5:00pm    </ListGroup.Item>
    <ListGroup.Item><b>Email Address</b> <br></br>
    nuts@gmail.com
    </ListGroup.Item>
    </ListGroup>
    <br></br>
            </Container>
           
        </Jumbotron>
  
</div>        
</Container>
    );
}

export default Body;
