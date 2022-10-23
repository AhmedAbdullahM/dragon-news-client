import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {Outlet} from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import LeftSide from '../pages/Shared/LeftSideNav/LeftSide';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';
const Main = () => {
    return (
       <div>
<Header></Header>
<Container>
            <Row>
                <Col lg={'2'} className='d-none d-lg-block'>
              <LeftSide></LeftSide>
                </Col>
                <Col lg='7'>
                <Outlet></Outlet>
                </Col>
                <Col lg='3'>
        <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
       </div>
    );
};

export default Main;