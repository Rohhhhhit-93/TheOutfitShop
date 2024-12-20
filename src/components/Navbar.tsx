import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

function BasicExample() {
  return (
    <>
      <Container >
        <Row xs={1}>
          <Nav activeKey="/home" className=''>
            <Nav.Item >
              <Nav.Link className='nav-links' href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className='nav-links' href='#products'>Products</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className='nav-links' href='#categories'>Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className='nav-links' href='#sale'>Sale</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className='nav-links' href='#about'>About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link className='nav-links' href='/contact'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    </>
  );
}

export default BasicExample;