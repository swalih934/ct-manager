import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Register() {
  return (
<>
<div className='d-flex justify-content-center ' style={{height:'80vh'}}>
<Row className='border border shadow  p-5 mt-5 mb-5 w-75' >
<Col sm={12} md={6}>
  <h1 className='text-center' style={{fontWeight:'bold'}}>Register Now</h1>
  <input placeholder='Your Name' className='form-control mb-3 p-3' type="email" />

  <input placeholder='Email address' className='form-control mb-3 p-3' type="email" />
  <input placeholder='Password' className='form-control mb-3 p-2' type="number" />

<Link to={'/Home'} className='btn btn-danger d-grid'>Proceed</Link>
</Col>
<Col sm={12} md={6} className='p-5 text-center'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHfWfiRN2tvw-cEE3kuj2zst2gs7M7Yzsxg&s" alt="" />
</Col>
</Row>

</div>





</>
  )
}

export default Register