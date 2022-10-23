import { GoogleAuthProvider } from 'firebase/auth';
import React,{useContext} from 'react';
import { ButtonGroup, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {FaGoogle,FaGithub,FaFacebook,FaWhatsapp,FaTwitter,FaTwitch} from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from './../../../Context/AuthProvider/AuthProvider';

const RightSideNav = () => {
const {providerLogin}=useContext(AuthContext)
const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <div>
             <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle/> Login with Google</Button>
      <Button variant="outline-dark"><FaGithub/> Login with Github</Button>
      </ButtonGroup>

      <div className='mt-3'>
        <h2>Find us on</h2>
        <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
      </div>
      <div className='mt-5'>
        <BrandCarousel></BrandCarousel>
      </div>
        </div>
    );
};

export default RightSideNav;