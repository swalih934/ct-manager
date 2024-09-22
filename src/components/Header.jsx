import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
<>
<Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-address-book fa-xl" style={{color: "#174697",}} />
           {' '}
           <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
         Contacts

           </Link>
          </Navbar.Brand>
          <Link to={'/'} style={{color:'black'}} >Logout</Link>
        </Container>
      </Navbar>


</>

)
}

export default Header