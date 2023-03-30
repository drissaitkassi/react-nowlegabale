
import { Table,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import { Button , Modal, Form } from "react-bootstrap";


function TableSection(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userData,setUserData]=useState([])

    function handleDelete(event,id){

        console.log(id)
        fetch(`http://localhost:3000/users/${id}`,{method:'DELETE'})
        .then((res)=>{
            if(res.ok){
                setUserData(userData.filter((u)=>{
                    return u.user_id!=id
                }))
                

            }
        })
    }




    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res=>res.json())
        .then(data=>setUserData(data))
    },[])

  

    return(
   <div id="myTable">
    <Container>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th >Age </th>
                <th>Action </th>
                
                
            </tr>
            </thead>
            <tbody>
            {
                userData.map((data)=> {
                    return( 
                        <tr>
                            <td>{data.user_id}</td>
                            <td >{data.name}</td>
                            <td >{data.age}</td>
                            <td className="col-3">
                                <Button variant="info" size="sm" onClick={handleShow} >Update</Button>
                                {/* if we don't pass the event the function get called when the component is mount 
                                and we dont want that 
                                we want the function to be called when the on click event get trigered by the button */}
                                <Button className="ms-2" variant="danger" size="sm" onClick={event =>handleDelete(event,data.user_id)}>Delete</Button>
                            </td>                           
                        </tr>
                    )
              

                })
            }
           
           
            </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User id</Form.Label>
                    <Form.Control type="text" placeholder="Enter Id" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter Age" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
    );
}

export default TableSection;