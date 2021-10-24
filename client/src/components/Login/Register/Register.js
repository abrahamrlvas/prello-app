import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { register } from '../../../actions/userActions';
import { ErrorHandler } from '../../ErrorHandler';
import { Loading } from '../../Loading';
import './style.css';

export const Register = () => {

    const history = useHistory();
    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userLogin)
    const { loading, error, user } = userRegister;

    useEffect(() => {
        if (user) {
            history.push('/login')
        }
    }, [history, user])

    const handleRegister = async (e) => {
        e.preventDefault();
        dispatch(register(name, lastName, username, password))
    }

    return (
        <div className="main-container">
            <div>
                {error && <ErrorHandler>{error}</ErrorHandler>}
                {loading && <Loading />}
            </div>
            <Card className="main-card shadow-none p-3 mb-5 bg-light rounded">
                <Card.Body>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control value={lastName} onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder="Enter lastname" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">

                                We'll never share your username with anyone else.

                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
