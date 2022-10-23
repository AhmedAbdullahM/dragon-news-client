import React,{useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from './../../../Context/AuthProvider/AuthProvider';
import {useLocation, useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast';
const Login = () => {
    const navigate=useNavigate()
    const {signIn,setLoading}=useContext(AuthContext)
 const [error,setError]=useState('') 
  const location=useLocation()
  const from=location.state?.from?.pathname || '/'

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            // console.log(user);
            form.reset()
            setError('')
            if(user.emailVerified){

              navigate(from,{replace:true})
            }
            else{
              toast.error('please verify your email')
            }
        })
        .catch(error=>{
          console.log(error)
          setError(error.message)
        })
        .finally(()=>{
          setLoading(false);
          // console.log('from finally', setLoading)
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />  
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger">
           <p> {error} </p>
          </Form.Text>
      </Form>
    );
};

export default Login;