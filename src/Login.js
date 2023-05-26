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
        // Handle login logic here sd
    };

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', position: 'relative' }}>
            <div style={{ marginTop: '10%' }}>
                <h1 style={{ fontFamily: 'PoppinsSemiBold', color: 'white', textAlign: 'center', fontSize: '140px' }}>WELCOME</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '10%', top: '60vh', marginright: 20 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={username} onChange={handleInputChange} placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;
