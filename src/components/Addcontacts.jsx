import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function Addcontacts() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<>
<div className='d-flex '>
    
    <button className='btn'>
    <i onClick={handleShow}  className="fa-solid fa-square-plus fa-xl" style={{color: "blue",}} />
    
    </button>
</div>


<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingTextarea" label="Name"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Email"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Phone Number"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Phone Url"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here"  />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >Understood</Button>
        </Modal.Footer>
      </Modal>

</>

)
}

export default Addcontacts