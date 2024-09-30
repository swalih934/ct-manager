import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Landing.css'
function Landing() {
  return (
<>
<div className='container align-items-center d-flex mt-3 mb-5 justify-content-center' style={{background:'wheat',borderRadius:"10px",margin:'auto'}}>
<Row className='p-3 '>
<Col sm={12} md={6} className='p-5 '>

    <h2>
    <i className="fa-solid fa-address-book fa-xl " style={{color: "#174697",}} />
    {"  "}
      Contact-manager</h2>
    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate deleniti magni, repellat beatae accusantium, repellendus aspernatur adipisci dolorem dolor ut recusandae. Assumenda voluptatem laboriosam eaque corporis officia aliquam qui.</p>
<div className='d-grid mt-5'>
    <Link to={'/Log'} className='btn btn-primary'> Let's Start</Link>
</div>
</Col>
<Col id='img' sm={12} md={6}>
<img className='p-3 img-fluid rounded' src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-problem-and-solution-in-business-solving-to-look-ideas-with-the-png-image_4757978.png" alt="" />
</Col>

</Row>
</div>
<div className='container-fluid mb-5'>
<h3 className='my-3 text-center'>Features</h3>

    <div className=' row p-4   align-items-center d-flex justify-content-around gap-3'>
    <Card className='border shadow col-sm-12 col-md-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"200px"} src="https://dtlive.s3.ap-south-1.amazonaws.com/16992/Contact-us-Animated-GIF-Icon-Pack-2.gif" />
      <Card.Body>
        <Card.Title  className='text-center' style={{color:'black',fontWeight:'bold'}}>Save Contacts</Card.Title>
        <Card.Text  className='text-center'>
        Save your contacts Always Connect with others
        </Card.Text>
      </Card.Body>
    </Card>
    <Card  className='border shadow col-sm-12 col-md-4' style={{ width: '18rem' }}>
      <Card.Img    variant="top" height={"200px"} src="https://justpressone.com/wp-content/uploads/2018/04/5080a8c2-aa56-4242-8bca-afd896d570a1.gif" />
      <Card.Body>
        <Card.Title className='text-center' style={{color:'black',fontWeight:'bold'}}>Connect someone </Card.Title>
        <Card.Text  className='text-center'>
         Connect someone special in your contacts
        </Card.Text>
      </Card.Body>
    </Card> 
    <Card  className='border shadow col-sm-12 col-md-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"200px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMcdzL_u8qZzFrOI6_NHaXsfgRsMUny7mzA&s" />
      <Card.Body>
        <Card.Title  className='text-center' style={{color:'black',fontWeight:'bold'}}>ConnectWith</Card.Title>
        <Card.Text  className='text-center'>
        share your memories and thoughts to public
        </Card.Text>
      </Card.Body>
    </Card>

    </div>

</div>



</>
  )
}

export default Landing