import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Navbar.css'; // Ensure this CSS file is created
import logo from '../Images/logo.jpeg';


const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="custom-navbar">
            <Navbar.Brand href="#home" className="ms-4 fs-10" style={{ fontSize: '20px', fontWeight: 'bold', color: '#A0006D' }}>
                <img
                    src={logo} // Replace with your logo path
                    width="38"
                    height="32"
                    className="d-inline-block align-top logo-circle"
                    alt="Logo"
                />{' '}
                Aasan-Delivery
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#about" className="custom-nav-link">About</Nav.Link>
                    <Nav.Link href="#services" className="custom-nav-link">Services</Nav.Link>
                    <Nav.Link href="#features" className="custom-nav-link">Features</Nav.Link>
                    <Nav.Link href="#contact" className="custom-nav-link">Contact</Nav.Link>
                </Nav>
                <div className="me-4">
                    <Button className="me-2 custom-button" variant="outline">
                        Login
                    </Button>
                    <Button className="custom-button" variant="outline">
                        Sign Up
                    </Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
