import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import nouh from '../img/nouh.jpeg';

function Header() {
    return ( <div >
        <div className = "text-center" >
        <img src = { nouh } alt = "Ma photo de profil" className = "rounded-circle mt-3 me-3" style = {{ width: 200, height: 200 } }/>
         <h2 > Benchlikha nouh </h2> 
         <h5 > Etudiant en 4 éme année IIR </h5> 
         </div>


        <Navbar bg = "primary"variant = "dark" expand = "lg" >
        <Navbar.Toggle  controls = "basic-navbar-nav"/>
        <Navbar.Collapse id = "basic-navbar-nav" >
        <Nav className = "mx-auto" >
        <Nav.Link as = { Link } to = "/" > Accueil </Nav.Link> <Nav.Link as = { Link } to = "/formation" > Formations </Nav.Link>
         <Nav.Link as = { Link } to = "/experience" > Experience </Nav.Link>
          <Nav.Link as = { Link } to = "/projet" > Projets </Nav.Link>
           </Nav> </Navbar.Collapse> </Navbar> </div>


    );
}

export default Header;