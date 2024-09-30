import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {

  const nav=useNavigate()

  const lgout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }
  return (
<>
<Navbar className="bg-body-tertiary " style={{height:"80px"}}>
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-address-book fa-xl" style={{color: "#174697",}} />
           {' '}
           <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
         Contacts

           </Link>
          </Navbar.Brand>
          <button className='btn ' onClick={lgout} style={{color:'black'}} >Logout</button>
        </Container>
      </Navbar>


</>

)
}

export default Header