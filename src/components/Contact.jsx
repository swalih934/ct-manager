import React from 'react'
import Contactcard from './Contactcard'
import { Row,Col } from 'react-bootstrap'

function Contact() {
  return (
<>
<div className=' border border-3 shadow mb-5 p-4  d-flex '>
<Row >
  
      <Col  >
      <Contactcard/>
      </Col>
  
   
</Row>


</div>
</> 
)
}

export default Contact