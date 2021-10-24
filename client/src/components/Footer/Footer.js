import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
export const Footer = () => {
    return (
        <div>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            Copyright by &copy; Abraham Rivas 2021
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}
