import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



function NavScrollExample() {
    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary" >
            <Container fluid>
                <img className='logo-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39hnuAkVj7SmsJ9yI5Bd7O40RS-6E9ghgTA&s'></img>
                <Navbar.Brand href="#"> <b>TheOutfitShop</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-flex">
                            
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                
                            />
                            {/* <Button className='search-button' variant="outline-success">Search</Button> */}
                            <IoSearch size={24}/>
                            

                        </Form>
                    </Nav>

                </Navbar.Collapse>
            </Container>

            {/* <Nav variant="underline" defaultActiveKey="/home"> */}
                {/* <Nav.Item>
                    <Nav.Link className='nav-links' href="/home">Home</Nav.Link >
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-links' href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-links' href="/categories">Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-links' href="/sale">Sale</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-links' href="/contact">Contact</Nav.Link>
                </Nav.Item> */}
             {/* </Nav> */}
           <div className='user'>
          <FaShoppingCart /> 
           <FaUser />
           <FaHeart />
           </div>
            </Navbar>
        </Container>
        
    );
}

export default NavScrollExample;