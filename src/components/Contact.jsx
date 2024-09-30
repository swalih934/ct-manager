import { useEffect,useState } from 'react'
import React from 'react'
import Contactcard from './Contactcard'
import { Row,Col } from 'react-bootstrap'
import { getcontacts } from '../Services/AllApis'
function Contact({add}) {
    const [contacts,setContacts]=useState([])
    const [delresponse,setDelResponse]=useState("")

    useEffect(()=>{
getData()
    },[add,delresponse])
    const getData=async()=>{
        const res=await getcontacts()
        console.log(res);
        if(res.status==200){
            setContacts(res.data)
        }
        // else{
        //     console.log(res);
            
        // }
    }
  return (
<>
<div className=' border border-3 shadow mb-5 p-4   '>
    {
        contacts.length>0?
<Row >
    {
        contacts.map(item=>(
            <Col  >
            <Contactcard contact={item} response={setDelResponse}  />
            </Col>
        ))
    }
  
 


</Row>
:
<h2 className='text-center text-info'>no contacts available</h2>
    }



</div>
</> 
)
}

export default Contact