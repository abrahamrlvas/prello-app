import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './style.css';
import { Loading } from '../../Loading';
import { ErrorHandler } from '../../ErrorHandler';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/userActions';

export const Login = ({ history }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, user } = userLogin;

    useEffect(() => {
        if (user) {
            history.push('/notes')
        }
    }, [history, user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    }

    return (
        <div className="main-container">
            <div>
                {error && <ErrorHandler>{error}</ErrorHandler>}
                {loading && <Loading />}
            </div>
            <Card className="main-card shadow-none p-3 mb-5 bg-light rounded">
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" onChange={(e) => { setUsername(e.target.value) }} />
                            <Form.Text className="text-muted">

                                We'll never share your username with anyone else.

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
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
