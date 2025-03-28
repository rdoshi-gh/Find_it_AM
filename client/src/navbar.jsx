import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from './assets/FindItLogo.png';
import menuIcon from './assets/menuButton.png';

function MyNavBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <>
      {/* Navigation Bar */}
      <Navbar 
        className="navbar-maroon sticky-top px-3 position-relative" 
        style={{ backgroundColor: '#500000', zIndex: 10, height: '80px' }}
      >
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

          {/* Centered logo */}
          <Navbar.Brand href="#home" className="mx-auto">
            <img
              src={logo}
              width="60"
              height="60"
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
