import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './mainScreen.css';

export const MainScreen = ({ name, children }) => {
    return (
        <div className="main-screen">
            <Container>
                <Row>
                    <div className="title-name">
                        {name &&
                            <>
                                <h1 className="main-title">Welcome back {name}...</h1>
                                <hr />
                            </>
                        }
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    )
}
