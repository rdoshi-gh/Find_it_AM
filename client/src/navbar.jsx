import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from './assets/FindItLogo.png';
import menuIcon from './assets/menuButton.png';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <>
      {/* Navigation Bar */}
      <Navbar className="navbar-maroon sticky-top" style={{ backgroundColor: '#500000', zIndex:10}}>
        <Container className="d-flex justify-content-center align-items-center">
          {/* Left-aligned menu button */}
          <div 
            style={{ position: 'absolute', left: '30px', top: '15px', cursor: 'pointer' }}
            onClick={toggleSidebar} // Toggle sidebar on click
          >
            <img
              src={menuIcon}
              width="48"
              height="48"
              alt="Menu"
            />
          </div>

          <Navbar.Brand href="#home">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-custom-components" style={{ color: 'white' }}>
                <FaBars /> {/* Hamburger icon */}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* Dropdown items */}
                <Dropdown.Item href="#home">Home</Dropdown.Item>
                <Dropdown.Item href="#other">Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>

          {/* Center-aligned Logo */}
          <Navbar.Brand className="mx-auto" href="#home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="FindIt A&M logo"
              style={{ position: 'relative', top: '5px' }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Sidebar Offcanvas */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start"> 
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item action>Saved</ListGroup.Item>
            <ListGroup.Item action>Recents</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNavBar;
