import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Login.css';

const AuthForm = ({ show, handleClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        stakeholderType: 'sender',
        name: '',
        email: '',
        mobile: '',
        password: '',
        otp: '',
    });
    const [otpSent, setOtpSent] = useState(false);
    const [otpSentStatus, setOtpSentStatus] = useState(false);

    const handleStakeholderType = (type) => setFormData({ ...formData, stakeholderType: type });
    const handleFormSwitch = () => {
        setIsLogin(!isLogin);
        setOtpSent(false);
        setFormData({ ...formData, otp: '' });
    };
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!otpSent) {
            console.log('Sending OTP to:', formData.mobile || formData.email);
            setOtpSent(true);
            setOtpSentStatus(true);
        } else {
            console.log('Verifying OTP:', formData.otp);
            if (formData.otp === "123456") { 
                console.log('Form data submitted:', formData);
                handleClose(); 
            } else {
                alert('Invalid OTP, please try again.');
            }
        }
    };

    const renderStakeholderSpecificFields = () => {
        switch (formData.stakeholderType) {
            case 'sender':
                return (
                    <Form.Group controlId="formSenderAddress">
                        <Form.Label>Sender Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="senderAddress"
                            placeholder="Enter your address"
                            required
                            value={formData.senderAddress || ''}
                            onChange={handleChange}
                            className="custom-input"
                        />
                    </Form.Group>
                );
            case 'recipient':
                return (
                    <>
                        <Form.Group controlId="formRecipientName">
                            <Form.Label>Recipient Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="recipientName"
                                placeholder="Enter recipient's name"
                                required
                                value={formData.recipientName || ''}
                                onChange={handleChange}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Form.Group controlId="formRecipientAddress">
                            <Form.Label>Recipient Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="recipientAddress"
                                placeholder="Enter recipient's address"
                                required
                                value={formData.recipientAddress || ''}
                                onChange={handleChange}
                                className="custom-input"
                            />
                        </Form.Group>
                    </>
                );
            case 'postman':
                return (
                    <>
                        <Form.Group controlId="formPostmanID">
                            <Form.Label>Postman ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="postmanID"
                                placeholder="Enter your Postman ID"
                                required
                                value={formData.postmanID || ''}
                                onChange={handleChange}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPostmanZone">
                            <Form.Label>Postman Zone</Form.Label>
                            <Form.Control
                                type="text"
                                name="postmanZone"
                                placeholder="Enter your zone"
                                required
                                value={formData.postmanZone || ''}
                                onChange={handleChange}
                                className="custom-input"
                            />
                        </Form.Group>
                    </>
                );
            case 'postOffice':
                return (
                    <>
                        <Form.Group controlId="formPostOfficeCode">
                            <Form.Label>Post Office Code</Form.Label>
                            <Form.Control
                                type="text"
                                name="postOfficeCode"
                                placeholder="Enter Post Office Code"
                                required
                                value={formData.postOfficeCode || ''}
                                onChange={handleChange}
                                className="custom-input"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPostOfficeLocation">
                            <Form.Label>Post Office Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="postOfficeLocation"
                                placeholder="Enter Post Office Location"
                                required
                                value={formData.postOfficeLocation || ''}
                                onChange={handleChange}
                                className="custom-input"
                            />
                        </Form.Group>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body>
                <div className="form-container d-flex flex-column flex-lg-row">
                    <div className="form-fields" style={{ width: '100%', padding: '20px' }}>
                        <span className="close-btn" onClick={handleClose}>&times;</span>
                        <h2 style={{ textAlign: 'center', color: '#A0006D' }}>
                            {isLogin ? 'Login' : 'Sign Up'}
                        </h2>

                        {/* Stakeholder type selection */}
                        <div className="stakeholder-buttons d-flex justify-content-between flex-wrap mb-3">
                            <Button onClick={() => handleStakeholderType('sender')} style={{ backgroundColor: '#A0006D', borderColor: '#A0006D' }}>Sender</Button>
                            <Button onClick={() => handleStakeholderType('recipient')} style={{ backgroundColor: '#A0006D', borderColor: '#A0006D' }}>Recipient</Button>
                            <Button onClick={() => handleStakeholderType('postman')} style={{ backgroundColor: '#A0006D', borderColor: '#A0006D' }}>Postman</Button>
                            <Button onClick={() => handleStakeholderType('postOffice')} style={{ backgroundColor: '#A0006D', borderColor: '#A0006D' }}>Post Office</Button>
                        </div>

                        <Form onSubmit={handleSubmit}>
                            {/* Login specific fields */}
                            {isLogin ? (
                                <>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="custom-input"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="custom-input"
                                        />
                                    </Form.Group>
                                </>
                            ) : (
                                <>
                                    {/* Sign-Up specific fields */}
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="custom-input"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="custom-input"
                                        />
                                    </Form.Group>
                                </>
                            )}
                            {renderStakeholderSpecificFields()}
                            {/* Mobile Number Field */}
                            <Form.Group controlId="formMobile">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="mobile"
                                    placeholder="Enter your mobile number"
                                    required
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="custom-input"
                                />
                            </Form.Group>
                            {/* OTP Field */}
                            {otpSent && (
                                <Form.Group controlId="formOtp">
                                    <Form.Label>OTP</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="otp"
                                        placeholder="Enter OTP sent to your mobile/email"
                                        required
                                        value={formData.otp}
                                        onChange={handleChange}
                                        className="custom-input"
                                    />
                                </Form.Group>
                            )}
                            {/* Submit Button */}
                            <Button
                                variant="primary"
                                type="submit"
                                style={{ backgroundColor: '#A0006D', borderColor: '#A0006D' }}
                            >
                                {otpSent ? (isLogin ? 'Verify OTP' : 'Sign Up') : (isLogin ? 'Login' : 'Send OTP')}
                            </Button>
                            <p className="mt-3 text-center">
                                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                                <Button variant="link" onClick={handleFormSwitch} style={{ color: '#A0006D' }}>
                                    {isLogin ? 'Sign Up' : 'Login'}
                                </Button>
                            </p>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AuthForm;
