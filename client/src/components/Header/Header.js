import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown, Button, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import './style.css';

export const Header = ({ setSearch }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        history.push("/");
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to='/' className="links">Prello APP</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="links" to="/notes">
                                Notes
                            </Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form className="d-flex me-auto">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={ (e) => setSearch(e.target.value) }
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                        <Nav>
                            <NavDropdown title="Abraham Rivas" id="collasible-nav-dropdown">
                                <NavDropdown.Item>My Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
