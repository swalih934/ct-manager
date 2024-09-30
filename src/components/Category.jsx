import React from 'react'
import CatogeryList from './CatogeryList'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../Services/AllApis';
import { toast } from 'react-toastify';
function Category() {
    const [show, setShow] = useState(false);
    const [category,setCategory]=useState({
      categoryid:"",title:"",contacts:[]
    })
    const [addresponse,setAddResponse]=useState()
const handleCategory=async()=>{
  console.log(category);
  const {categoryid,title}=category
  if(!categoryid || !title){
    toast.warning("enter valid inputs")
  }
  else{
    const result=await addCategory(category)
    console.log(result);
    if(result.status==201){
      toast.success("catogery Added!!")
      handleClose()
      setCategory({
        categoryid:"",title:"",contacts:[]
      })
      setAddResponse(result)
    }
    else{
      toast.error("ctegory adding failed")
    }
    
  }
  
}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<>
<div className='d-grid'>
    <button onClick={handleShow} className='btn btn-primary '>Add Catogery</button>
    
</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Catogeries</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingTextarea" label="Catogery ID"className="mb-3">
        <Form.Control type='number' placeholder="Leave a comment here"  onChange={(e)=>{setCategory({...category,categoryid:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Catogery Title"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e)=>{setCategory({...category,title:e.target.value})}} />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
<CatogeryList response={addresponse}/>

</>
)
}

export default Category