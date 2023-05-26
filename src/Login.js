import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '1vh', position: 'relative' }}>
            <div style={{ marginTop: '1%' }}>
                <h1 style={{ fontFamily: 'PoppinsSemiBold', color: 'white', marginTop: '50px', textAlign: 'center', fontSize: '180px' }}>WELCOME</h1>
            </div>
            <div style={{ position: 'absolute', left: '-380px', top: '20px' }}>
                <img src="/images/Leaplogo-1.png" alt="Logo" style={{ width: '500px' }} />
            </div>
            <div style={{ fontFamily: 'PoppinsSemiBold', display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '-10%', top: '40vh', marginRight: 20 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label >Username: </Form.Label>
                        <Form.Control type="text" name="username" value={username} onChange={handleInputChange} placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
                    </Form.Group>

                    <Button variant="outline-light" type="submit" style={{ fontFamily: 'PoppinsSemiBold', backgroundColor: '#072C49', color: 'white', height: '40px', borderWidth: '1px' }}>
                        Login
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;
