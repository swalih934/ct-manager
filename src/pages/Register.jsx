import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkEmailApi, registerApi } from '../Services/AllApis'
import { useNavigate } from 'react-router-dom'
function Register() {

  const [user, setUser] = useState({
    username: "", email: "", password: ""
  })
  const nav = useNavigate()

  const handleRegister = async () => {
    console.log(user);
    const { username, email, password } = user
    if (!username || !email || !password) {
      toast.warning("Enter valid inputs!!")
    }
    else {
      const result = await checkEmailApi(email)
      console.log(result);
      if (result.data.length > 0) {
        toast.warning("Email ID already in use!!")
      }
      else {
        const result = await registerApi(user)
        if (result.status == 201) {
          toast.success("success")
          setUser({
            email: "", username: "", password: ""
          })
          nav('/log')
        }
        else {
          toast.error("Registration failed")
          console.log(result);

        }
      }

    }
  }
  return (
    <>
      <div className='d-flex justify-content-center ' style={{  }}>
        <Row className='border border shadow  p-5 mt-5 mb-5 w-75' >
          <Col sm={12} md={6}>
            <h1 className='text-center' style={{ fontWeight: 'bold' }}>Register Now</h1>
            <input placeholder='Your Name' onChange={(e) => { setUser({ ...user, username: e.target.value }) }} className='form-control mb-3 p-3' type="text" />

            <input placeholder='Email address' onChange={(e) => { setUser({ ...user, email: e.target.value }) }} className='form-control mb-3 p-3' type="email" />
            <input placeholder='Password' onChange={(e) => { setUser({ ...user, password: e.target.value }) }} className='form-control mb-3 p-2' type="number" />

            <Link  className='btn btn-danger d-grid' onClick={handleRegister}>Register</Link>
          </Col>
          <Col sm={0} md={6} className=' text-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHfWfiRN2tvw-cEE3kuj2zst2gs7M7Yzsxg&s" alt="" />
          </Col>
        </Row>

      </div>





    </>
  )
}

export default Register