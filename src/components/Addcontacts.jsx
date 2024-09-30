import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addcontacts } from '../Services/AllApis';
import { toast } from 'react-toastify';
function Addcontacts({response}) {
    const [show, setShow] = useState(false);

    const [contact,setContact]=useState({
        name:"",email:"",phoneNumber:"",phoneUrl:""
    })
    const handleUpload= async()=>{
        console.log(contact);
        const {name,email,phoneNumber,phoneUrl}=contact
        if(
            !name ||!email ||!phoneNumber ||!phoneUrl
        ){
            toast.warning("please enter valid input!!")
        }
        else{
           const res=  await addcontacts(contact)
           console.log(res);
           if(res.status==201){
            toast.success("upload succesfull!!")
handleClose()
response(res)
setContact({
   name:"",email:"",phoneNumber:"",phoneUrl:""
})
           }
           else{
            toast.error("upload failed!!")
           }
        }

    }

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);
  return (
<>
<div className='mt-5  '>
    
    <button onClick={handleShow}  className='btn btn-primary fw-bold '>
      Add
    <i  className="fa-solid fa-square-plus  p-2"  />
    
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
        <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setContact({...contact,name: e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Email"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setContact({...contact,email:e.target.value})}}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Phone Number"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here"  onChange={(e)=>{setContact({...contact,phoneNumber:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Phone Url"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setContact({...contact,phoneUrl:e.target.value})}}  />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

</>

)
}

export default Addcontacts