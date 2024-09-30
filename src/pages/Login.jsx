import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { loginApi } from '../Services/AllApis'
import { toast } from 'react-toastify'
function Login() {
  const [user,setUser]=useState({
    email:"",password:""
  })
  const nav = useNavigate()

  const handleLogin=async()=>{
    console.log(user);
    const{email,password}=user
    if(!email || !password){
      toast.warning("Enter valid inputs!")
    }
    else{
      const result=await loginApi(email,password)
      if(result.status==200){
        if(result.data.length>0){
          console.log(result.data[0]);
          sessionStorage.setItem('userData',JSON.stringify(result.data[0]))
          
          toast.success("Login successfull!!")
          nav('/Home')
          setUser({
              email: "", password: ""
          })
        }
        else{
          toast.warning("invalid email /password")
        }
      }
      else{
        toast.error("something went wrong!!")
      }

    }
  }
  return (
<>
<div className='d-flex justify-content-center  align-items-center' style={{}}>
<Row className='border border shadow  p-5 mt-5 mb-5 w-75' >
<Col sm={12} md={6}>
  <h1 className='text-center' style={{fontWeight:'bold'}}>Login</h1>
  <input placeholder='Email address' onChange={(e)=>{setUser({...user,email:e.target.value})}} className='form-control mb-3 p-3' type="email" />
  <input placeholder='Password'onChange={(e)=>{setUser({...user,password:e.target.value})}} className='form-control mb-3 p-2' type="number" />

<Link  onClick={handleLogin} className='btn btn-danger d-grid'>Login</Link>
<div className='text-center' style={{alignItems:'center'}}>
  <Link to={'/Reg'} style={{textDecoration:'none',color:'black'}} className='text-center align-items-center '> <span style={{color:"blue"}}>Now user?</span> Register Now</Link>
  
</div></Col>
<Col sm={12} md={6} className=' text-center'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ub0XbZqV7N7CmZJIK7AF5qzSvxhZuV_YFw&s" alt="" />
</Col>
</Row>

</div>


</>  )
}

export default Login