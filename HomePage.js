import React from 'react';
import { Container, Form, Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
    }

    render() {
        return (
            <Container className="mt-5">
                <Jumbotron>
                    <h1>Welcome to Our Website!</h1>
                    <p>This is a simple welcome subtitle.</p>
                </Jumbotron>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default HomePage;