import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar,Nav,Container } from 'react-bootstrap'; 

function TopNavigationBar() {
    return (
       
            <div id="myNav">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-CRUD-EFREI</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"> Login </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
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



