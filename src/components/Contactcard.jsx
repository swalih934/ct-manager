import React,{useState} from 'react'
import { deleteVideo } from '../Services/AllApis'
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updateContact } from '../Services/AllApis';
function Contactcard({ contact, response, cat }) {

  const [show, setShow] = useState(false);


  const [contactDetails, setContactDetails] = useState(contact)

  const handleUpdate = async () => {
      const result = await updateContact(contactDetails.id, contactDetails)
      if (result.status == 200) {
          toast.success("Contact Updated Successfull!!")
          edit(result)
          handleClose()
      }
  }

  const handledelete = async () => {
    const res = await deleteVideo(contact.id)
    console.log(res);
    if (res.status == 200) {
      toast.success("contact Deleted")
      response(res)
    }
    else {
      toast.error("deletion Failed")
    }
  }
  const draghandler = (e) => {
    console.log(e);
    console.log(contact);
    e.dataTransfer.setData("contact", JSON.stringify(contact))


  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      


<div className=' d-flex justify-content-center align-items-center'>
  
        <Card className=' mb-4 align-items-center' style={cat ? { width: '100%' } : { width: '17rem' }} onDragStart={(e) => { draghandler(e) }} draggable>
          <div className='d-flex justify-content-center' style={{width:'100%'}}  >
            <Card.Img className='align-items-center m-auto pt-4 ' style={{ width: '50%', }} variant="" src={contact?.phoneUrl} />
  
          </div>      <Card.Body>
            <h6 className='text-center '><span style={{ fontWeight: "bold" }}>name:</span>{contact?.name}</h6>
            <h6 className='text-center'><span style={{ fontWeight: "bold" }}>phone num:</span>{contact?.phoneNumber}</h6 >
            <h6 className='text-center'><span style={{ fontWeight: "bold" }}>email:</span>{contact?.email}</h6 >
            {
              !cat &&
              <div className=' d-flex justify-content-around'>
                <div className='btn' onClick={handledelete} style={{color:'red'}}>
                  <i className="fa-solid fa-trash" />
                </div>
                <div className='btn'onClick={handleShow} >
                  <i className="fa-solid fa-pen-to-square" style={{color:'navy'}} />
                </div>
  
                <Button variant='btn' style={{color:'green'}} >
                  <i  className="fa-solid fa-phone" />
                </Button>
  
              </div>
            }
 
  
          </Card.Body>
        </Card>
</div>



<Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold'>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="" label="Name" className="mb-3" >
                        <Form.Control type="text" placeholder="" Value={contact?.name} onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="" label="Mobile Number" className='mb-3' >
                        <Form.Control type="number" placeholder="" Value={contact?.mobile} onChange={(e) => setContactDetails({ ...contactDetails, mobile: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="" label="Image URL" className='mb-3' >
                        <Form.Control type="text" placeholder="" Value={contact?.imageUrl} onChange={(e) => setContactDetails({ ...contactDetails, imageUrl: e.target.value })} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
    </>)
}

export default Contactcard