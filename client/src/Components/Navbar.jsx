import React, {useState} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Navbar.css';
import AuthForm from './Login';
import logo from '../Images/logo.jpeg'; // Import the logo

const NavigationBar = () => {
    const [showAuthForm, setShowAuthForm] = useState(false);

    return (
        <>
        <Navbar bg="light" expand="lg" className="custom-navbar">
            <Navbar.Brand href="#home" className="ms-4 fs-10" style={{ fontSize: '20px', fontWeight: 'bold', color: '#A0006D' }}>
                <img
                    src={logo} // Use the imported logo here
                    width="30"
                    height="30"
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
                    <Button className="me-2 custom-button" variant="outline"onClick={() => setShowAuthForm(true)}>
                        Login
                    </Button>
                    <Button className="custom-button" variant="outline" onClick={() => setShowAuthForm(true)}>
                        Sign Up
                    </Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
        <AuthForm show={showAuthForm} handleClose={() => setShowAuthForm(false)} />
        </>
    );
};

export default NavigationBar;
