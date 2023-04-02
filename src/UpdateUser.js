import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import TitleSection from './titleSection';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateUser() {

  const [details,setDetails ]=useState({
    user_id :"",
    name :"",
    age : "",
})
const {id}=useParams();
const handleChange=(e)=>{

    const name =e.target.name
    const value =e.target.value
    setDetails((prev)=>{
        return {...prev,[name]:value}
    })
    console.log(value);
}

function handelUpdateUser() {
    
    fetch(`http://localhost:3000/users/${id}`,{
        method:"PUT",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)

    }).then(res=>res.json())
    .then(data=>console.log(`${data} sucess`))
}


  return (
    <Container id="addUserFormContainer"> 
         <TitleSection title="Update User Form "></TitleSection>
            <Form onSubmit={handelUpdateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User id</Form.Label>
                    <Form.Control type="text" value={id} name="user_id" disabled onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"  name="name" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" placeholder="Enter Age" name="age" onChange={handleChange} />
                </Form.Group>
               
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
  );
}



export default UpdateUser;