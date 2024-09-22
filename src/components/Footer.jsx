import React from 'react'
import { Row,Col } from 'react-bootstrap'
function Footer() {
  return (
<>
<div className='container-fluid bg-light ' style={{color:'black'}}>
    <Row className='p-5'>
        <Col sm={12} md={6}>
        <h5>ABOUT</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolores porro rerum? Accusantium nulla maiores cum asperiores omnis, nesciunt suscipit doloremque totam deleniti laboriosam ipsa minima, assumenda quaerat ex tempora!
    
        </p>
        </Col>
        <Col sm={12} md={6}>
        <h5>UPCOMING</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat a eius tempore assumenda! Ipsum quae officia esse illo distinctio a fugit, eveniet voluptates molestias explicabo porro itaque! Quo, dignissimos?
            
        </p>
        </Col>
    </Row>
    
</div>

</>

  )
}

export default Footer