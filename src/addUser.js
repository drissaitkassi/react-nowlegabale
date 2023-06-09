import { useState } from "react";
import { Container , Form,Button } from "react-bootstrap";
import TitleSection from "./titleSection";


function AddUser(){

    const [details,setDetails ]=useState({
        email :"",
        password : "",
    })

    const handleChange=(e)=>{

        const name =e.target.name
        const value =e.target.value
        setDetails((prev)=>{
            return {...prev,[name]:value}
        })
        console.log(value);
    }

    function handelCreateNewUser(e) {
        
        fetch('http://localhost:3000/user',{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
    
        }).then(res=>res.json())
        .then(data=>console.log("sucess"))

    }


    return(
        <Container id="addUserFormContainer"> 
         <TitleSection title="Add User Form "></TitleSection>
            <Form onSubmit={handelCreateNewUser}>
              

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"  name="email" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Enter Age" name="password" onChange={handleChange} />
                </Form.Group>
               
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>

    )
}

export default AddUser;