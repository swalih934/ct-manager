import React ,{useState,useEffect}from 'react'
import Addcontacts from '../components/Addcontacts'
import Contact from '../components/Contact'
import Category from '../components/Category'
import { Row,Col } from 'react-bootstrap'


function Home() {
  const [addResponse,setAddResponse]=useState("")

  const[username,setUsername]=useState("")
  useEffect(()=>{
    const user=JSON.parse(sessionStorage.getItem('userData'))
    setUsername(user?.username)
  },[])
  return (
    <>
<h3 className='text-center mt-3'>Welcome {username} manage your contacts</h3>
<div className='bg-primary container-fluid justify-content-center d-flex align-items-center p-3'>


</div>
<div className='container mt-5'>
<Row>
  <Col sm={12} md={1}>
  <Addcontacts response={setAddResponse} />
  </Col>
<Col className='' sm={12} md={8}>
<Contact add={addResponse} />
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