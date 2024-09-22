import React from 'react'
import Addcontacts from '../components/Addcontacts'
import Contact from '../components/Contact'
import Category from '../components/Category'
import { Row,Col } from 'react-bootstrap'

function Home() {
  return (
    <>
<h3 className='text-center mt-3'>Welcome swalih manage your contacts</h3>
<div className='bg-primary container-fluid justify-content-center d-flex align-items-center p-3'>


</div>
<div className='container mt-5'>
<Row>
  <Col sm={12} md={1}>
  <Addcontacts />
  </Col>
<Col sm={12} md={8}>
<Contact />
</Col>
<Col sm={12} md={3}>
<Category/>
</Col>


</Row>


</div>


</>

  )
}

export default Home