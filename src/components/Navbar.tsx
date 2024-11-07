import Nav from 'react-bootstrap/Nav';

function BasicExample() {
  return (
    <>
    <Nav
      activeKey="/home"
      >
      <Nav.Item >
        <Nav.Link className='nav-links' href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className='nav-links' href='#products'>Products</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className='nav-links' href='#categories'>Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className='nav-links' href='/sale'>Sale</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className='nav-links' href='/contact'>Contact</Nav.Link>
      </Nav.Item>
    </Nav></>
  );
}

export default BasicExample;