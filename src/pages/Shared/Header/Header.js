import React,{useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSide from '../LeftSideNav/LeftSide';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'
import { FaUser} from 'react-icons/fa'
import Button from 'react-bootstrap/Button'

const Header = () => {
  const {user,LogOut}=useContext(AuthContext)
const handleLogOut=()=>{
  LogOut()
  .then(()=>{})
  .catch((err)=>{console.error(err)})
}
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="info" variant="light">
        <Container>
          <Navbar.Brand> <Link to={'/'}>Dragon News</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All news</Nav.Link>
              <Nav.Link href="#pricing">Sports news</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <>
                {
                  user?.uid?
                  <>
                  <span>{user?.displayName}</span>
                 <Button  variant="outline-danger" onClick={handleLogOut}>Log out</Button>
                  </>
                  :
                  <>
                  <Link to={'/login'}>Login</Link>
                  <Link to={'/register'}>Register</Link>
                  </>
                }
              </>
              <Link eventKey={2} to='/profile'>
               {user?.photoURL?
               <Image style={{height:'50px'}} roundedCircle src={user.photoURL}></Image>
               :
               <FaUser></FaUser>
               }
              </Link>
            </Nav>
            <div className='d-lg-none'>
            <LeftSide></LeftSide>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;