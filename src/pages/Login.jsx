import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Login() {
  return (
<>
<div className='d-flex justify-content-center ' style={{height:'80vh'}}>
<Row className='border border shadow  p-5 mt-5 mb-5 w-75' >
<Col sm={12} md={6}>
  <h1 className='text-center' style={{fontWeight:'bold'}}>Login</h1>
  <input placeholder='Email address' className='form-control mb-3 p-3' type="email" />
  <input placeholder='Password' className='form-control mb-3 p-2' type="number" />

<Link to={'/Home'} className='btn btn-danger d-grid'>Login</Link>
<div className='text-center' style={{alignItems:'center'}}>
  <Link to={'/Reg'} style={{textDecoration:'none',color:'black'}} className='text-center align-items-center '> <span style={{color:"blue"}}>Now user?</span> Register Now</Link>
  
</div></Col>
<Col sm={12} md={6} className='p-5 text-center'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ub0XbZqV7N7CmZJIK7AF5qzSvxhZuV_YFw&s" alt="" />
</Col>
</Row>

</div>


</>  )
}

export default Login