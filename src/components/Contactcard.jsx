import React from 'react'

function Contactcard() {
  return (

<>
<table  className='table table-bordered border shadow border-4 border-dark '>
      <thead>
      <tr>
          <th>Photo        </th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-center'>
            <img  style={{width:'100px'}} src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=" alt="" />
          </td>
          <td>mohammed swalih</td>
          <td>swalih@gmail.com</td>
          <td>8976564532</td>
          <td>
      <div className='d-flex justify-content-around '>
<div className='btn'>
                <i className="fa-solid fa-phone" style={{color:'green'}} />
  
</div>          
<div className='btn'>
       <i className="fa-solid fa-trash" style={{color:'red'}} />
  
</div>      </div>
     </td>
        </tr>
        
      </tbody>
    </table>
</>)
}

export default Contactcard