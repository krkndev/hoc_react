import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const withNavBar =
  (Component) =>
  ({ ...props }) =>
    (
      <>
        <Navbar
          id={'layout-test'}
          collapseOnSelect
          fixed='top'
          expand='lg'
          bg='white'
        >
          <Container style={{ backgroundColor: '#bbb', height: '60px' }}>
            <Navbar.Brand href=''>NavBar</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              {localStorage.length > 1 ? (
                <Nav className='mr-auto'>
                  <Nav.Link to='' className='nav-link'>
                    Link1
                  </Nav.Link>
                  <Nav.Link to='' className='nav-link'>
                    Link2
                  </Nav.Link>
                </Nav>
              ) : (
                <>
                  <Nav className='mr-auto'>
                    <Nav.Link to='' className='nav-link'>
                      Login
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link to='' className='nav-link'>
                      Sign Up
                    </Nav.Link>
                  </Nav>
                </>
              )}

              {localStorage.length >= 1 ? (
                <Navbar.Collapse
                  className='justify-content-end '
                  style={{ marginRight: '15px' }}
                >
                  <NavDropdown id={'navDrop'} title='user1234'>
                    <NavDropdown.Item>
                      <Nav
                        style={{ maxWidth: '75px', align: 'right' }}
                        onClick={() => {}}
                      >
                        Logout
                      </Nav>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Navbar.Collapse>
              ) : (
                ''
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Component {...props}>{props.children}</Component>
      </>
    );

export default withNavBar;

// hoc to acces storage
