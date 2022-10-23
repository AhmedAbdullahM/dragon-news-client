import React,{useContext,useState} from 'react';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Register = () => {
    const {createUser,updateUserProfile, verifyEmail}=useContext(AuthContext)
    const [accept,setAccept]=useState(false)

  const [error,setError]=useState(null)
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photoUrl.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password,photo)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            // console.log(user);
            handleUpdateUserProfile(name,photo)
            handleEmailVerification()
            form.reset()
            setError('')
            toast.success('check your email to verify.', {
              style: {
                border: '1px solid #24bf1f',
                padding: '16px',
                color: '#713200',
              },
              iconTheme: {
                primary: '#813200',
                secondary: '#FFFAEE',
              },
             duration:5000,
            });
        })
        .catch(err=>{
          console.log(err)
          setError(err.message)
        })
        
    }

    const handleAccepted=(event)=>{
    setAccept(event.target.checked)
    }

    const handleUpdateUserProfile=(name,photoURL)=>{
      const profile={
        displayName:name,
        photoURL:photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch((err)=>console.error(err))
    }
    const handleEmailVerification=()=>{
      verifyEmail()
      .then(()=>{})
      .catch((err)=>{console.error(err)})
    }

    return (
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter your name" />  
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photoUrl' placeholder="Enter photo url" />  
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />  
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" 
        onClick={handleAccepted}
        label={<>Accept <Link to={'/terms'}>Terms and Condition</Link></>} 
         />
      </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept}>
          Register
        </Button>
        <Form.Text className="text-danger">
          {error}
          </Form.Text>
      </Form>
    );
};

export default Register;