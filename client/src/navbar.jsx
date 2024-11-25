import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/FindItLogo.png';

function MyNavBar() {
  return (
    <>
      <Navbar className="navbar-maroon sticky-top" style={{ backgroundColor: '#500000', zIndex:10}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="FindIt A&M logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;