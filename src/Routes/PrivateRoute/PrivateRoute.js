import React,{useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
/*
 1.only allow authentic user to visit the route
 2.
 3.redirect the user where they want go
**/


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    
    const location=useLocation()
    if(loading){
      return <Spinner animation="border" variant="primary" />
    }

    if(!user){
      return  <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;