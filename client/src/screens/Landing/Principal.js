import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export const Principal = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Bienvenido a PrelloAPP</h1>
                            <p className="subtitle">Tu aplicacion numero uno para el control de tareas del dia a dia.</p>
                        </div>
                        <div className="buttonContainer">
                            <Link to="/login">
                                <Button size="lg" variant="success" className="landingbutton">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button size="lg" variant="outline-success" className="landingbutton">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
