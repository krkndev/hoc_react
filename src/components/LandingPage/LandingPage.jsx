import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const LandingPage = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/auth'>Auth</Nav.Link>
            <Nav.Link href='/test'>Test</Nav.Link>
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              Signed in as: <a href='#login'>{localStorage.userName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingPage;
