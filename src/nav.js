import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar,Nav,Container } from 'react-bootstrap'; 

function TopNavigationBar() {
    return (
       
            <div id="myNav">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">React-CRUD-EFREI</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/add">Add User</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login"> Login </Nav.Link>
                            <Nav.Link eventKey={2} href="/register">
                                Signup
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    
            </div> 
        );
  }
  
export default TopNavigationBar;



