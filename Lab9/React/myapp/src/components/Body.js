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
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert'

function Body(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [lang, setLang] = useState(0);
  const setEN = () =>{
    setLang(0);
}
const setFR =() =>{
  setLang(1);
}
const t1 = [<h2 className="Title">Browse through the biggest selection of fresh nuts in Ottawa!.</h2>,
      <h2 className="Title">Parcourez la plus grande sélection de noix fraîches à Ottawa!</h2>];
const tbtn = [<a href = "#menu" className="link">Browse our selection{">"}</a>,
      <a href = "#menu" className="link">Parcourez notre sélection{">"}</a> ]
const mess = [<p className = "phrase">We make new batches everyday!</p>,<p className = "phrase"> Nous fabriquons de nouveaux lots tous les jours !</p>]

  const t2 = [<h1 class="about"> <img src={aboutus} alt="" className="icon"/> About us</h1>,
    <h1 class="about"> <img src={aboutus} alt="" className="icon"/> Information</h1>]

  const t3 = [<p class="phrase">We have been proudly serving Canadians for over 30 years.</p>,
  <p class="phrase">Nous sommes fiers de servir les Canadiens depuis plus de 30 ans.</p> ];
 
 const t4 = [<p class="phrase">Since 1991 all of our customers have been enjoying our daily roasted fresh nuts. </p>, 
        <p class="phrase">Depuis 1991, tous nos clients apprécient quotidiennement nos noix fraîches grillées. </p>];

const t5 = [<p class="phrase">We are a locally owned and funded buisness and we will continue to serve our customers to the best of our abilitys.</p>,
        <p class="phrase">Nous sommes une entreprise détenue et financée localement et nous continuerons à servir nos clients au mieux de nos capacités.</p>];

const t7=[ <h1 class="men" > <img src={menu} alt="" className="icon1"/> Our Menu</h1>,
<h1 class="men" > <img src={menu} alt="" className="icon1"/> Notre Menu</h1> ]
const t8=[ <Card.Text id= "phrase">
The Pistachio is a memeber of the cashew family, is a small tree originating from Central Asia and the Middle East.
</Card.Text>, <Card.Text id= "phrase">
Le Pistache est un membre de la famille du cajou, c'est un petit arbre originaire d'Asie centrale et du Moyen-Orient.
  </Card.Text>]
const t9=[<Button variant="primary" id="order" onClick={handleShow}>
Order Now!
</Button>,<Button variant="primary" id="order" onClick={handleShow}>
Commandez maintenant!
  </Button>]
 
const t10=[<Modal.Title id="mod">Please fill out the required information</Modal.Title>,
<Modal.Title id="mod">Veuillez remplir les informations requises</Modal.Title>]
const t11=[<Form.Label id="name">Full Name</Form.Label>,<Form.Label id="name">Nom et prénom</Form.Label>]

const t12=[<Form.Control id = "place" type="name" placeholder="Full Name" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>,
          <Form.Control id = "place" type="name" placeholder="Nom et prénom" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>]

const t13=[<Form.Label id = "e">Email address</Form.Label>,
        <Form.Label id = "e">Courriel</Form.Label>]

const t14=[<Form.Label>Home address</Form.Label>, 
      <Form.Label>Adresse du domicile</Form.Label>]
const t15=[ <Form.Label>Credit Card#</Form.Label>,<Form.Label>Carte de crédit#</Form.Label>]
const t16=[ <Button variant="secondary" onClick={handleClose}>
Close
</Button>, <Button variant="secondary" onClick={handleClose}>
        Fermer
      </Button>]
const t17=[<Button variant="primary" onClick={handleClose}>
Place Order
</Button>,<Button variant="primary" onClick={handleClose}>
      Passer la commande
      </Button> ]

const t18=[  <Card.Text>
  The cashew tree (Anacardium occidentale) is a tropical evergreen tree that produces the cashew seed and the cashew apple pseudofruit.
  </Card.Text>,
   <Card.Text>
   L'anacardier (Anacardium occidentale) est un arbre tropical à feuilles persistantes qui produit la graine de cajou et le pseudo-fruit de la pomme de cajou.
   </Card.Text>]
const t19=[<Card.Text>
  Almonds are the edible seeds of Prunus dulcis, more commonly called the almond tree.
  </Card.Text>,
  <Card.Text>
  Les amandes sont les graines comestibles de Prunus dulcis, plus communément appelé l'amandier.
  </Card.Text>]
const t20=[<Card.Text>
  The peanut, also known as the groundnut,[2] goober (US),[3] pindar (US)[3] or monkey nut (UK), and taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds.
  </Card.Text>,
  <Card.Text>
  L'arachide, également connue sous le nom d'arachide,[2] goober (US),[3] pindar (US)[3] ou monkey nut (UK), et taxonomiquement classée comme Arachis hypogaea, est une légumineuse cultivée principalement pour sa des graines.
  </Card.Text>]
const t21=[<h1 class=""> <img src={help} alt="" className="icon"/> Help</h1>,
<h1 class=""> <img src={help} alt="" className="icon"/> Aide</h1>]

const t44=[<h5>Frequently Asked Questions</h5>,<h5>Questions fréquemment posées</h5>]
const t45=[<ListGroup.Item><b>Q: Where is Go Nuts located?</b> 
<br></br>
<b>A:</b>We are located on 4529 HuntClub rd. 
</ListGroup.Item>, <ListGroup.Item><b>Q : Où se trouve Go Nuts ?</b> <br></br>
<b>R :</b> Nous sommes situés au 4529 HuntClub rd.
  </ListGroup.Item>]

const t46=[<ListGroup.Item><b>Q: Are the nuts freshly roasted everyday?</b> <br></br>
  <b>A:</b> YES! We have a new batch of nuts roasted every morning.
</ListGroup.Item>,<ListGroup.Item><b>Q : Les noix sont-elles fraîchement grillées tous les jours ?</b> <br></br>
                  <b>R :</b> OUI! Nous avons un nouveau lot de noix grillées chaque matin.
  </ListGroup.Item>]



const t49=[<h5>Please contact us for any other concerns that have not been answered in the frequently asked questions</h5>,<h5>Veuillez nous contacter pour toute autre préoccupation qui n'a pas été répondue dans la foire aux questions</h5>]

const t50=[<ListGroup.Item><b>Phone number</b> <br></br>
  613-412-2156 <br></br>Mon - Sat, 8:00am-5:00pm
  </ListGroup.Item>,<ListGroup.Item><b>Numéro de téléphone</b> <br></br>
  613-412-2156 <br></br>Lun - Sam, 8h00-17h00
  </ListGroup.Item>]
const t51=[<ListGroup.Item><b>Email Address</b> <br></br>
  nuts@gmail.com
  </ListGroup.Item>,<ListGroup.Item><b>Courriel</b> <br></br>
  nuts@gmail.com
  </ListGroup.Item>]


const t53=[<Nav.Link href="#About"><img src={aboutus} alt="" className="smallicon"/> About us</Nav.Link>, <Nav.Link href="#About"><img src={aboutus} alt="" className="smallicon"/> Information</Nav.Link>]
const t54=[<Nav.Link href="#menu"><img  src ={menu} alt="" className="smallicon"/> Menu</Nav.Link>,<Nav.Link href="#menu"><img src={menu} alt="" className="smallicon"/> Menu</Nav.Link>]

const t58=[<Nav.Link href="#Help"><img src={help} alt="" className="smallicon"/> Help</Nav.Link>,<Nav.Link href="#Help"><img src={help} alt="" className="smallicon"/> Aide</Nav.Link>]

    return(  

    
    <Container>
      
      <Navbar bg="dark" variant="dark">
      <Container id = "con">
        <Nav className="me-auto" >
        <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Fragment>
        {/* <Nav.Link href="#About"><img src={aboutus} alt="" className="smallicon"/> About us</Nav.Link>*/}
        {t53[lang]}
        {/*<Nav.Link href="menu"><img  src ={menu} alt="" className="smallicon"/> Menu</Nav.Link>,<Nav.Link href="#menu"><img  src={menu} alt="" className="smallicon"/> Menu</Nav.Link>*/}
        {t54[lang]}
        
        
       
        {/*<Nav.Link href="#Help"><img src={help} alt="" className="smallicon"/> Help</Nav.Link>*/}
        {t58[lang]}
        <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
        <Nav.Link onClick={setEN} id="lan"><img alt="" className="smallicon"/> EN</Nav.Link>
        <Nav.Link onClick={setFR} id="lan"><img  alt="" className="smallicon"/> FR</Nav.Link>
         {/*}       <button className="langbtn english" onClick={setEN}>EN</button>
                <button className="langbtn french" onClick={setFR}>FR</button>*/}
        </Nav>
      </Container>

      </Navbar>
        
      
      
        <Jumbotron fluid id="jum">
            <Container>
                <h1 > <img src={nut} id = "img1" alt="" className="icon"/> Go Nuts</h1>
            </Container>
           
        </Jumbotron>

        <Jumbotron fluid id="jum">
            <Container>
                {/*<h2 className="Title">Browse through the biggest selection of fresh nuts in Ottawa!</h2>*/}
                {t1[lang]}
                <br></br>
                <br></br>
                {/*<p className="phrase">We make new batches everyday!</p>*/}
                {mess[lang]}
                <br></br>
                <br></br>

            </Container>
            {/*<a href = "#menu" className="link">Browse our selection{">"}</a>*/}
            {tbtn[lang]}

        </Jumbotron>


        <Jumbotron fluid id="jum">
            <Container>
            <div class ="p-3 my-3 bg" id= "About">

              {/*<h1 class="about"> <img src={aboutus} alt="" className="icon"/> About us</h1>*/}
              {t2[lang]}
              <br></br>
  
              {/*<p class="phrase">We have been proudly serving Canadians for over 30 years.</p>*/}
              {t3[lang]} 

              {/*<p class="phrase">Since 1991 all of our customers have been enjoying our daily roasted fresh nuts. </p>*/}
              {t4[lang]}
  
              {/*<p class="phrase">We are a locally owned and funded buisness and we will continue to serve our customers to the best of our abilitys.</p>*/}
              {t5[lang]}
            </div>
            </Container>
           
        </Jumbotron>

        <div class ="p-3 my-3 bg" id = "menu">
        <Jumbotron fluid id="jum">
            <Container>
            {/*<h1 class="men" > <img src={menu} alt="" className="icon1"/> Our Menu</h1>*/}
            {t7[lang]}
            <br></br>

<CardDeck>
<Card>
<Card.Img variant="top" src={pistach}/>
<Card.Body>
<br></br>
  <Card.Title>Pistachios</Card.Title>
  
  {/*<Card.Text id= "phrase">
  The Pistachio is a memeber of the cashew family, is a small tree originating from Central Asia and the Middle East.
              </Card.Text>*/}
    {t8[lang]}
  
</Card.Body>
<Card.Footer>
<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  {/*<Button variant="primary" id="order" onClick={handleShow}>
    Order Now!
            </Button>*/}
            {t9[lang]}
  <Modal id="md1" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title id="mod">Please fill out the required information</Modal.Title>
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
  {/*<Card.Text>
  The cashew tree (Anacardium occidentale) is a tropical evergreen tree that produces the cashew seed and the cashew apple pseudofruit.
  </Card.Text>*/}
  {t18[lang]}
  
</Card.Body>
<Card.Footer>
<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  {/*<Button variant="primary" id="order" onClick={handleShow}>
    Order Now!
            </Button>*/}
            {t9[lang]}
  <Modal id="md1" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title id="mod">Please fill out the required information</Modal.Title>
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
  {/*<Card.Text>
  Almonds are the edible seeds of Prunus dulcis, more commonly called the almond tree.
  </Card.Text>*/}
  {t19[lang]}
  
</Card.Body>
<Card.Footer>
<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  {/*<Button variant="primary" id="order" onClick={handleShow}>
    Order Now!
            </Button>*/}
            {t9[lang]}
  <Modal id="md1" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title id="mod">Please fill out the required information</Modal.Title>
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
  {/*<Card.Text>
  The peanut, also known as the groundnut,[2] goober (US),[3] pindar (US)[3] or monkey nut (UK), and taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds.
  </Card.Text>*/}
  {t20[lang]}
</Card.Body>
<Card.Footer>
<Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
 {/*<Button variant="primary" id="order" onClick={handleShow}>
    Order Now!
            </Button>*/}
            {t9[lang]}
  <Modal id="md1" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      {/*<Modal.Title id="mod">Please fill out the required information</Modal.Title>*/}
      {t10[lang]}
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="name">
          {/*<Form.Label id="name">Full Name</Form.Label>*/}
          {t11[lang]}
          {/*<Form.Control id = "place" type="name" placeholder="Full Name" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>*/}
          {t12[lang]}
        </Form.Group>
        <Form.Group controlId="email">
          {/*<Form.Label id = "e">Email address</Form.Label>*/}
          {t13[lang]}
          <Form.Control  type="email" placeholder="name@example.com" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="adress">
          {/*<Form.Label>Home address</Form.Label>*/}
          {t14[lang]}
          <Form.Control type="adress" placeholder="123 test dr" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
        <Form.Group controlId="credit">
          {/*<Form.Label>Credit Card#</Form.Label>*/}
          {t15[lang]}
          <Form.Control type="credit" placeholder="XXXX-XXXX-XXXX-XXXX" onchange="if (typeof this.reportValidity === 'function') {this.reportValidity();}"/>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      {/*<Button variant="secondary" onClick={handleClose}>
        Close
          </Button>*/}
          {t16[lang]}
      {/*<Button variant="primary" onClick={handleClose}>
        Place Order
        </Button>*/}
        {t17[lang]}
    </Modal.Footer>
  </Modal>
</Card.Footer>
</Card>
</CardDeck>
            </Container>
           
        </Jumbotron>
    
</div>    

<div class ="p-3 my-3 bg" id="Help">
<Jumbotron fluid id="jum">
            <Container>
            {/*<h1 class=""> <img src={help} alt="" className="icon"/> Help</h1>*/}
            {t21[lang]}
            <br></br>
    {/*<h5>Frequently Asked Questions</h5>*/}
    {t44[lang]}
    <ListGroup>
    {/*<ListGroup.Item><b>Q: Where is Go Nuts located?</b> <br></br>
                    A: We are located on 4529 HuntClub rd.
    </ListGroup.Item>*/}
    {t45[lang]}
    {/*<ListGroup.Item><b>Q: Are the nuts freshly roasted everyday?</b> <br></br>
                    A: YES! We have a new batch of nuts roasted every morning.
    </ListGroup.Item>*/}
    {t46[lang]}
    </ListGroup>
    <br></br>
    {/*<h5>Please contact us for any other concerns that have not been answered in the frequently asked questions</h5>*/}
    {t49[lang]}
    <ListGroup>
    {/*<ListGroup.Item><b>Phone number</b> <br></br>
    613-258-4155 <br></br>Mon - Sat, 8:00am-5:00pm    </ListGroup.Item>*/}
    {t50[lang]}
    {/*<ListGroup.Item><b>Email Address</b> <br></br>
    nuts@gmail.com
    </ListGroup.Item>*/}
    {t51[lang]}
    </ListGroup>
    <br></br>
            </Container>
           
        </Jumbotron>
  
</div>        
</Container>
    );
}

export default Body;
